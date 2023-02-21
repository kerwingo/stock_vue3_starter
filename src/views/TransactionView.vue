<!--
 * @Description: transaction page
 * @Author: Kerwin
 * @Date: 2023-02-17 14:49:45
 * @LastEditTime: 2023-02-17 16:24:29
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const themeVars = reactive({
    tabsCardHeight: '50px',
    tabFontSize: '16px',
    tabsNavBackground: 'rgb(245, 246, 248)',
    tabsBottomBarWidth: '20px',
    tabsBottomBarColor: '#333',
    cellBackground: 'rgb(245, 246, 248)',
    cellFontSize: '12px'
})
const active = ref(0)
const { type }: { type?: number } = route.query
if (type != undefined) {
    active.value = Number(type)
}


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
</script>

<template>
    <van-config-provider :theme-vars="themeVars">
        <main class="body_con">
            <NavBar :title="'我的交易'" :leftArrow="true" :background="'rgb(245, 246, 248)'" />
            <van-tabs v-model:active="active">
                <van-tab title="买入">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <table style="width: 98%; border-collapse: collapse; text-align: center; margin-left: 1%;">
                            <tr style="height: 37px;">
                                <td align="center" class="title_buy">买入时间</td>
                                <td align="center" class="title_buy">股数</td>
                                <td align="center" class="title_buy">价格</td>
                                <td align="center" class="title_buy"></td>
                            </tr>
                        </table>
                        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                            <van-cell v-for="item in list" :key="item" :title="item" />
                        </van-list>
                    </van-pull-refresh>

                </van-tab>
                <van-tab title="卖出">内容 2</van-tab>
                <van-tab title="持仓">
                    <table class="hold " style="width: 98%; margin-left: 2%; margin-top: 0.5rem;">
                        <tr>
                            <td align="center" class="content_hold">0.00</td>
                            <td align="center" class="content_hold">0.00</td>
                            <td align="center" class="content_hold">0.00</td>
                        </tr>
                        <tr>
                            <td align="center" class="title_buy">总资产</td>
                            <td align="center" class="title_buy">持仓盈亏</td>
                            <td align="center" class="title_buy">可用</td>
                        </tr>
                        <tr height="20px">
                            <td></td>
                        </tr>
                        <tr>
                            <td align="center" class="content_hold">0</td>
                            <td align="center" class="content_hold">0.00</td>
                            <td align="center" class="content_hold">0.00</td>
                        </tr>
                        <tr>
                            <td align="center" class="title_buy">持股</td>
                            <td align="center" class="title_buy">当日盈亏</td>
                            <td align="center" class="title_buy">可取</td>
                        </tr>
                    </table>
                    <div style="padding: 0px 1rem;">
                        <div class="card"
                            style="margin-top: 1.5rem; --9a7abb90:linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 100%);">
                            <table class="hold" style="width: 100%; border-spacing: 0px 13px;">
                                <tr>
                                    <td align="center" class="title_buy">市值</td>
                                    <td align="center" class="title_buy">持股</td>
                                    <td align="center" class="title_buy">现价/成本</td>
                                    <td align="center" class="title_buy">持仓盈亏</td>
                                </tr>
                                <tr>
                                    <td align="center" class="content_hold_extra">0.00</td>
                                    <td align="center" class="content_hold_extra">0</td>
                                    <td align="center" class="content_hold_extra">0.24/0.00</td>
                                    <td align="center" class="content_hold_extra">0.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="撤单">内容 4</van-tab>
            </van-tabs>
        </main>
    </van-config-provider>

</template>

<style scoped>
.body_con {
    background-color: rgb(245, 246, 248);
    min-height: 100vh;
}

.title_buy {
    font-size: 12px;
    color: #0006;
}

.content_hold {
    font-size: 16px;
    color: #000c;
    font-weight: 500;
}

.card {
    border-radius: 8px;
    padding: .8rem;
    background: var(--9a7abb90);
}

.hold .title_buy {
    font-size: 16px;
    color: #333;
}
</style>