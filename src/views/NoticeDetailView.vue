<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-21 14:07:37
 * @LastEditTime: 2023-02-21 15:06:57
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue';

const content = ref()
const onLoad = () => {
    content.value = '123456'
};
onLoad()

</script>

<template>
    <NavBar :title="'详情'" :leftArrow="true" />
    <main class="main">
        <div class="content" v-html="content">

        </div>

    </main>
</template>

<style scoped>
.main {
    background: #fff;
    padding: 0 1rem;
}

.content {
    font-size: 15px;
    color: #000c;
    margin-top: 1rem;
}
</style>
