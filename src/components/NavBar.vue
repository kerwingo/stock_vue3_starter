<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-13 13:21:17
 * @LastEditTime: 2023-02-14 12:44:26
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import router from "@/router"
import { routes } from "@/router"
import { Sunny, Moon } from "@element-plus/icons-vue";
const activeIndex = ref("coverMaker")
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if (key == 'void') return
    router.push({
        path: key
    })
}
const isLight = ref(true)
const toggleTheme = () => {
    isLight.value = !isLight.value
    const el = document.documentElement
    el.setAttribute('data-theme', isLight.value ? 'light' : 'dark')
    el.style['--el-color-primary'] = 'red'
    const eleEl = getComputedStyle(el)
    console.log(eleEl.getPropertyValue('--el-color-primary'))

}
const menu = reactive(routes)
</script>

<template>
    <header class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo border0" mode="horizontal" @select="handleSelect">
            <el-menu-item index="0"><img class="logo" src="@/assets/img/long_logo.png" alt=""></el-menu-item>
            <div class="flex-grow" />
            <el-menu-item :index="item.path" v-for="item in menu" ::key="item.path">{{ item.name }}</el-menu-item>
            <el-menu-item index="void" @click="toggleTheme"><span>切换主题</span> <el-icon :size="16">
                    <Sunny v-if="!isLight" />
                    <Moon v-else />
                </el-icon> </el-menu-item>
        </el-menu>
    </header>

</template>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.logo {
    height: 50px;
    border-radius: 4px;
}

.header {
    padding: 10px 0;
    margin-bottom: 30px
}

.border0 {
    border-width: 0px;
}
</style>