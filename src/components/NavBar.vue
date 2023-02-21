<!--
 * @Description: NavBar
 * @Author: Kerwin
 * @Date: 2023-02-13 13:21:17
 * @LastEditTime: 2023-02-17 15:21:48
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import { ref, reactive } from 'vue';
const props = defineProps({
    title: String,
    leftText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    className: String,
    background: String
})
const isLight = ref(true)
const toggleTheme = (): void => {
    isLight.value = !isLight.value
    const el = document.documentElement
    el.setAttribute('data-theme', isLight.value ? 'light' : 'dark')
}
const onClickLeft = () => history.back();
const themeVars = reactive({
    navBarTextColor: "#333",
    navBarIconColor: "#333",
    navBarArrowSize: "18px",
    navBarBackground: props.background || '#fff',
})
</script>

<template>
    <van-config-provider :theme-vars="themeVars">
        <van-nav-bar class="header" :class="[className]" placeholder :title="title" :left-text="leftText" z-index="100"
            :left-arrow="leftArrow" :fixed="fixed" @click-left="onClickLeft" />
    </van-config-provider>
</template>

<style scoped>
.header {}

::v-deep .van-nav-bar__content {
    height: 65px;
    margin: auto;
}

::v-deep .imgBg .van-nav-bar__content {
    background: no-repeat center/100% url(@/assets/img/homeBg.png);
    background-color: #f5f6f8;
}

::v-deep .van-nav-bar__title {
    font-size: 18px;
    font-weight: 600;
}
</style>