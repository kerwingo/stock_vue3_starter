<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-13 13:21:17
 * @LastEditTime: 2023-02-13 17:42:47
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import router from "@/router"
import { routes } from "@/router"
const activeIndex = ref("coverMaker")
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    router.push({
        path: key
    })
}
const menu = reactive(routes)
</script>

<template>
    <header class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo border0" mode="horizontal" @select="handleSelect">
            <el-menu-item index="0"><img class="logo" src="@/assets/img/long_logo.png" alt=""></el-menu-item>
            <div class="flex-grow" />
            <el-menu-item :index="item.path" v-for="item in menu" ::key="item.path">{{ item.name }}</el-menu-item>
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