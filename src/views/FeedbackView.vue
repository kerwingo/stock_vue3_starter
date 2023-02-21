<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2023-02-21 14:07:37
 * @LastEditTime: 2023-02-21 16:29:25
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue';

const content = ref()
const onLoad = () => {
};
onLoad()

</script>

<template>
    <NavBar :title="'意见反馈'" :leftArrow="true" />
    <main class="main">
        <textarea class="feedback_content" placeholder="请将您的建议或遇到的问题反馈给我们，帮助我们做得更好" />
        <div style="padding: 0px 1.5rem; margin-top: 4rem;">
            <van-button class="feedback_butn" text="提交" />
        </div>
        <div class="feedback_record"> 反馈记录</div>
    </main>
</template>

<style scoped>
.main {
    background: #fff;
    padding: 1rem;
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
