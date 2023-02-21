<!--
 * @Description: Trade page
 * @Author: Kerwin
 * @Date: 2023-02-16 14:25:22
 * @LastEditTime: 2023-02-17 16:25:40
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
import NavBar from '@/components/NavBar.vue'
import { ref, reactive, } from 'vue';
import { useRouter } from "vue-router"
const show = ref(false);
const form = reactive({
  type: "",
  estimate: "",
  unitPrice: "",
  num: "",
  confirmButtonText: "",
})
const handleClick = (type: string): void => {
  form.type = type
  if (type === 'buy') {
    form.confirmButtonText = '买入'
  } else if (type === 'sell') {
    form.confirmButtonText = '卖出'
  }
  show.value = true
}
const themeVars = reactive({
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: "none",
  buttonPrimaryBackgroundColor: "linear-gradient(90deg, #FF7641 0%, #FF0B40 100%)",
  cellIconSize: '20px',
  dialogConfirmButtonTextColor: "#ee0a24",
  tabsCardHeight: '20px',
  tabFontSize: '12px',
  stepperBackground: "#f5f5f5",
  stepperInputHeight: "40px",
})
const active = ref("")
const beforeClose = (action: string) =>
  new Promise((resolve) => {
    if (action != 'confirm') {
      // 拦截取消操作
      resolve(true);
    } else {
      if (!form.num) {
        resolve(false);
        return
      }
      setTimeout(() => {
        resolve(true);
      }, 1000);
    }
  });
const router = useRouter()
const toMyTransaction = () => {
  console.log(router)
  router.push({
    path: "/myTransaction",
    query: { type: 2 }
  })
}
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <main class="body_trade">
      <NavBar :title="'交易市场'" :background="'#f5f5f5'" />
      <div class="flex-body">
        <div class="card">
          <div class="trade-titles"><span>5档</span><span>价格</span><span>明细</span></div>
          <div class="unitprice_box">
            <span style="width: 33%;">卖5</span>
            <span class="unitprice" style="color: rgb(82, 196, 26);">0.28</span>
            <span style="width: 33%;">1409</span>
          </div>
          <div class="unitprice_box">
            <span style="width: 33%;">卖5</span>
            <span class="unitprice" style="color: rgb(82, 196, 26);">0.28</span>
            <span style="width: 33%;">1409</span>
          </div>
          <van-divider role="separator"></van-divider>
          <div class="unitprice_box">
            <span style="width: 33%;">买1</span>
            <span class="unitprice" style="color: rgb(82, 196, 26);">0.28</span>
            <span style="width: 33%;">1409</span>
          </div>
        </div>

        <div class="action-btn" data-v-c0d78ec9="">
          <van-button text="买入" class="buyButton" @click="handleClick('buy')" />
          <van-button text="卖出" class="sellButton" @click="handleClick('sell')" />
          <van-button text="撤单" class="cancelButton" @click="handleClick('cancel')" />
        </div>

        <div class="trade_detail" @click="toMyTransaction">
          <span style="font-size: 14px; color: rgb(250, 140, 22);">查看持仓</span>
          <van-image src="https://stock.shall-buy.cn/assets/backOrange.65f8593d.svg"></van-image>
        </div>
      </div>
      <van-dialog v-model:show="show" show-cancel-button :confirmButtonText="form.confirmButtonText"
        :beforeClose="beforeClose">
        <div class="formPanel">
          <van-stepper size="large" placeholder="单价" input-width="200px" v-model="form.unitPrice" step="0.01" />
          <van-stepper size="large" :placeholder="`${form.confirmButtonText}数量`" input-width="200px" v-model="form.num"
            step="100" min="0" style="margin-top:1rem" />
          <van-tabs v-model:active="active" type="card" style="width:90%;margin-top: 0.6rem;"
            :title-active-color="'#333'" :title-inactive-color="'#333'" :color="'#ddd'" :background="'#F5F6F8'">
            <van-tab title="1/4仓" />
            <van-tab title="1/3仓" />
            <van-tab title="1/2仓" />
            <van-tab title="全仓" />
          </van-tabs>
          <div style="margin-top: 0.7rem; font-size: 12px; color: rgb(250, 140, 22); text-align: center;"> 可买：0股
            &nbsp;&nbsp;&nbsp;可用：0.00</div>
        </div>
      </van-dialog>
      <TabBar />
    </main>
  </van-config-provider>

</template>

<style scoped>
.body_trade {
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 50px;
  box-sizing: border-box;
}

.card {
  border-radius: 8px;
  padding: .8rem;
  background: #fff;
}

.flex-body {
  flex: 1;
  overflow-y: auto;
  padding: 0 1rem;
}

.trade-titles {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #0006;
  margin-bottom: 1rem;
}

.unitprice_box {
  margin-bottom: .5rem;
  display: flex;
  font-size: 14px;
  color: #000c;
  text-align: center;
}

.unitprice_box .unitprice {
  font-weight: 500;
  margin-left: 4px;
  width: 33%;
}

.action-btn {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.trade_detail {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.buyButton {
  width: 105px;
  height: 40px;
  background: linear-gradient(90deg, #ff7641 0%, #ff0b40 100%);
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
}

.sellButton {
  width: 105px;
  height: 40px;
  background: linear-gradient(90deg, #24bfff 0%, #306ffa 100%);
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
}

.cancelButton {
  width: 105px;
  height: 40px;
  background: rgba(0, 0, 0, .12);
  color: #000c;
  font-weight: 500;
  border-radius: 4px;
}

.formPanel {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem 1rem 1.2rem;
}

.numberInput {
  margin-top: 1rem;
  display: flex;
}

::v-deep .van-stepper__input {
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>