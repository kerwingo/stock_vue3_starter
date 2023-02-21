<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-21 14:07:37
 * @LastEditTime: 2023-02-21 15:20:36
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
    setTimeout(() => {
        if (refreshing.value) {
            list.value = [];
            refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 20) {
            finished.value = true;
        }
    }, 1000);
};

const onRefresh = () => {
    // 清空列表数据
    finished.value = false;

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
};
const toDetail = (id: any) => {
    router.push({
        path: "/noticeDetail",
        query: {
            id
        }
    })
}
</script>

<template>
    <NavBar :title="'公告通知'" :leftArrow="true" :background="'rgb(245, 246, 248)'" />
    <main class="main">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <div class="card notice_card" @click="toDetail(1)">
                <div style="width: 100%; display: flex; justify-content: space-between;">
                    <div>
                        <div class="notice_content">意见反馈 - 优化通知...</div>
                        <div class="notice_date">2022.10.25</div>
                    </div>
                    <div>
                        <van-image src="" width="105px" height="75px" />
                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </main>
</template>

<style scoped>
.main {
    background: rgb(245, 246, 248);
    padding: 0 1rem;
    flex: 1;
}

.card {
    border-radius: 8px;
    padding: .8rem;
    background: #fff;
}

.notice_content {
    font-size: 16px;
    color: #000c;
    font-weight: 500;
}

.notice_date {
    font-size: 12px;
    color: #0009;
    margin-top: 5px;
}
</style>
