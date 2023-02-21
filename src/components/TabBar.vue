<!--
 * @Description: tabBar
 * @Author: Kerwin
 * @Date: 2023-02-16 13:55:11
 * @LastEditTime: 2023-02-16 14:36:51
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import router from "@/router"
const route = useRoute()
const active = ref("/");
const tabs = reactive([{
    name: "首页",
    path: '/',
    activeicon: "https://stock.shall-buy.cn/assets/home.6777bf6f.svg",
    icon: "https://stock.shall-buy.cn/assets/inactiveHome.f310ffca.svg"
}, {
    name: "交易",
    path: '/trade',
    activeicon: "https://stock.shall-buy.cn/assets/trade.62c0ac4a.svg",
    icon: "	https://stock.shall-buy.cn/assets/inactiveTrade.b89bf8c6.svg"
}, {
    name: "我的",
    path: '/user',
    activeicon: "https://stock.shall-buy.cn/assets/setting.a3a468c6.svg",
    icon: "https://stock.shall-buy.cn/assets/inactiveSetting.4e446c54.svg"
}])
const onChange = (path: string): void => {
    router.push({
        path: path
    })
}
const pathMatch = (): void => {
    active.value = route.path
}
onMounted((): void => {
    pathMatch()
})
</script>

<template>
    <van-tabbar v-model="active" active-color="#ee0a24" @change="onChange">
        <van-tabbar-item v-for="item in tabs" :key="item.name" :name="item.path" :icon="item.icon">
            <span>{{
                item.name
            }}</span>
            <template #icon="props">
                <img :src="props.active ? item.activeicon : item.icon" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>