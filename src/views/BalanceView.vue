<!--
 * @Description: balance page
 * @Author: Kerwin
 * @Date: 2023-02-17 14:49:45
 * @LastEditTime: 2023-02-17 16:57:17
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const themeVars = reactive({

})
const active = ref(0)
const { type }: { type?: number } = route.query
if (type != undefined) {
    active.value = Number(type)
}

const loading = ref(false)
const onRefresh = () => {
    setTimeout(() => {
        loading.value = false;
    }, 1000);
};
</script>

<template>
    <van-config-provider :theme-vars="themeVars">
        <main class="body_con">
            <NavBar :title="'我的余额'" :leftArrow="true" :background="'rgb(245, 246, 248)'" />
            <van-pull-refresh v-model="loading" @refresh="onRefresh">
                <div style="padding: 0px 15px;">
                    <div class="balance-card">
                        <div class="balance-number">0.00</div>
                        <div class="balance-action">
                            <van-button class="balance_btn1" text="转入" round />
                            <van-button class="balance_btn2" text="转出" round />
                        </div>
                    </div>
                    <div class="select-wrapper">
                        <div class="balance_select">
                            <span class="select-text">类型</span>
                            <van-image src="https://stock.shall-buy.cn/assets/expand2.28df71b6.svg"></van-image>
                        </div>
                        <div class="balance_select">
                            <span class="select-text">时间筛选</span>
                            <van-image src="https://stock.shall-buy.cn/assets/expand2.28df71b6.svg"></van-image>
                        </div>
                    </div>
                </div>
            </van-pull-refresh>
        </main>
    </van-config-provider>

</template>

<style scoped>
.body_con {
    background-color: rgb(245, 246, 248);
    min-height: 100vh;
}

.balance-card {
    margin-top: 12px;
    background: linear-gradient(180deg, #FFF3EE 0%, #FFFFFF 30%, #FFFFFF 100%);
    border-radius: 12px;
    padding: 25px 0;
}

.balance-card .balance-number {
    font-size: 28px;
    font-weight: 600;
    color: #000c;
    line-height: 42px;
    text-align: center;
}

.balance-card .balance-action {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
}

.balance_btn1 {
    width: 105px;
    height: 44px;
    background: linear-gradient(90deg, #FF7641 0%, #FF0B40 100%);
    border-radius: 24px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}

.balance_btn2 {
    width: 105px;
    height: 44px;
    background: #EBEBEB;
    border-radius: 24px;
    border: 1px solid #CCCCCC;
    font-weight: 500;
    font-size: 16px;
}

.select-wrapper {
    margin-top: 2rem;
    display: flex;
}

.select-wrapper .balance_select {
    margin-right: 15px;
    padding: 3px 12px;
    background: #FFFFFF;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.select-wrapper .select-text {
    margin-right: 6px;
    line-height: 23px;
    color: #333;
    font-size: 14px;
}
</style>