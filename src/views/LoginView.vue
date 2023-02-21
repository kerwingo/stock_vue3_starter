<!--
 * @Description: Login page
 * @Author: Kerwin
 * @Date: 2023-02-16 10:16:49
 * @LastEditTime: 2023-02-21 13:55:45
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import router from '@/router';

const logo = "data:image/png;base64,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"
const numberType = 0
const option1 = [
    { text: '+86', value: 0 },
    { text: '+886', value: 1 },
    { text: '+852', value: 2 },
    { text: '+853', value: 3 },
];
interface iForm {
    number: string,
    password: string,
    isChecked: boolean
}
const form = reactive<iForm>({
    number: "17628281574",
    password: "123456",
    isChecked: false
})
const hid = ref(true)
const pInpt = ref()
const toggleView = () => {
    hid.value = !hid.value
    pInpt.value.setAttribute("type", hid.value ? "password" : 'text');
}
const toggleClick = () => {
    form.isChecked = !form.isChecked
}
const disabled = ref(true)
watchEffect(() => {
    const { number, password, isChecked } = form
    disabled.value = !(isChecked && Boolean(number && password))
})
const handleLogin = () => {
    console.log(form, 'login data')
    router.replace({
        path: "/"
    })
}
</script>
<template>
    <div class="isFlex" style="linear-gradient(90deg, #FF7641 0%, #FF0B40 100%)">
        <van-image class="topBg" src="https://stock.shall-buy.cn/assets/loginBg.1bce5efd.png" />

        <van-image class="logo" :src="logo" />
        <div class="content">
            <div class="flex">
                <div class="prefix">
                    <van-dropdown-menu active-color="#ee0a24">
                        <van-dropdown-item v-model="numberType" :options="option1" />
                    </van-dropdown-menu>
                </div>
                <input type="number" class="input" v-model="form.number" placeholder="请输入手机号码">
                <van-image class="suffix" v-if="form.number" src="	https://stock.shall-buy.cn/assets/delete.825dea2f.svg"
                    style="width: 24px; height: 24px;" @click="form.number = ''" />
            </div>
            <div class="flex">
                <div class="prefix">
                    <van-image
                        :src="hid ? 'https://stock.shall-buy.cn/assets/unSee.eaa0a0a7.svg' : 'https://stock.shall-buy.cn/assets/see.aa6d90a0.svg'"
                        style="width: 24px; height: 24px; position: absolute; left: 1.2rem;" @click="toggleView" />
                </div>
                <input type="password" ref="pInpt" v-model="form.password" class="input password" placeholder="请输入密码">
            </div>
            <div class="agreement">
                <van-image :class="{ checkedStyle: form.isChecked }"
                    :src="form.isChecked ? 'https://stock.shall-buy.cn/assets/checked.ea0e00b2.svg' : 'https://stock.shall-buy.cn/assets/unchecked.8cc36c7d.svg'"
                    style="width: 16px; height: 16px;" @click="toggleClick" />
                <span style="margin-left: 8px; color: rgba(0, 0, 0, 0.6);">您已阅读并同意</span><a
                    style="color: rgb(117, 154, 216);">《用户服务协议》</a>
            </div>
            <van-button class="loginBtn" round :disabled="disabled" :class="{ gradient: !disabled }"
                @click="handleLogin">登录</van-button>
        </div>
    </div>
</template>

<style scoped>
.topBg {
    width: 100%;
    height: 148px;
}

.logo {
    width: 158px;
    height: 49px;
    margin-top: -4rem;
}

.content {
    margin-top: 3rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
}

.flex {
    display: flex;
    width: 100%;
    justify-content: end;
}

.prefix {
    font-size: 16px;
    width: 25%;
    height: 48px;
    background: rgba(0, 0, 0, .04);
    border-radius: 24px 0 0 24px/24px 0px 0px 24px;
    padding: .8rem 0;
}

input {
    background: rgba(0, 0, 0, .04);
    width: 75%;
    height: 48px;
    padding: .8rem 0;
    border-radius: 0 24px 24px 0/0px 24px 24px 0px;
    border-left: none;
    border-color: #00000003;
    color: #000;
    font-size: 18px;
}

input::placeholder {
    color: #C4C4C4;
}

.suffix {
    position: absolute;
    top: .8rem;
    right: 1rem;
}

::v-deep .van-dropdown-menu__bar {
    background: none !important;
    box-shadow: none !important;
    display: inline !important;
}

::v-deep .van-dropdown-item--down {
    width: 20%;
    left: 16px;
}

::v-deep .van-cell,
::v-deep .van-overlay {
    background: none !important;
}

::v-deep .van-popup--top {
    top: 2%;
    left: 1.2rem;
}

::v-deep .van-dropdown-menu__title:after {
    border-color: transparent transparent #000 #000;
}

::v-deep .van-ellipsis {
    font-size: 16px;
    color: #0009;
}

.agreement {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 3px;
    font-size: 10px;
}

.checkedStyle {
    position: relative;
    top: 2px;
}

::v-deep .loginBtn {
    background: rgba(0, 0, 0, .08);
    color: #00000080;
    font-size: 16px;
}

.gradient {
    background: linear-gradient(90deg, #FF7641 0%, #FF0B40 100%);
    color: #fff;
}
</style>