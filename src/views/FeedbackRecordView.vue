<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-21 16:09:28
 * @LastEditTime: 2023-02-21 16:19:42
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import router from '@/router';
import { ref } from 'vue';


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
    <NavBar :title="'反馈记录'" :leftArrow="true" />
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
    background: #fff;
    padding: 0 1rem;
}

.feedback_content {
    width: 100%;
    height: 15rem;
    background-color: #00000014;
    border: none;
    border-radius: 4px;
    padding: 1rem;
    resize: none;
}

.feedback_butn {
    background: linear-gradient(90deg, #FF7641 0%, #FF0B40 100%);
    border-radius: 24px;
    width: 100%;
    color: #fff;
    height: 46px;
    font-weight: 500;
    font-size: 16px;
}

.feedback_record {
    color: #fa8c16;
    font-size: 14px;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 3rem;
    text-align: center;
}
</style>
