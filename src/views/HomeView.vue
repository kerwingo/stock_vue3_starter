<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import TabBar from '@/components/TabBar.vue'
import { reactive, onMounted, ref } from 'vue';
import type { ECharts, EChartsOption, } from 'echarts'
import { init } from 'echarts'
let chart: ECharts;
const chartLoading = ref(true)
const tabActive = ref(0)
const chartRef = ref()
const tabs = reactive([{
  name: "分时",
  data: {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260]
      }
    ]
  }
}, {
  name: "日K",
  data: {
    xAxis: {
      data: ['2022-11-17', '2022-11-18', '2022-11-19', '2022-11-20', '2022-11-21', '2022-11-22', '2022-11-23']
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260]
      }
    ]
  }
}, {
  name: "周K",
  data: {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260]
      }
    ]
  }
}, {
  name: "月K",
  data: {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        data: [110, 120, 160, 218, 135, 147, 260]
      }
    ]
  }
}])
const initChart = () => {
  const option: EChartsOption = {
    xAxis: {
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'line'
      }
    ]
  };
  chart.setOption(option);

}
const updateChart = (option: EChartsOption) => {
  chart.setOption(option);
  chartLoading.value = false
}
const onClickTab = () => {
  chartLoading.value = true
  updateChart(tabs[tabActive.value].data)
}
onMounted(() => {
  chart = init(chartRef.value)
  initChart()
  // 延时2秒后执行增量更新
  setTimeout(() => {
    updateChart(tabs[0].data)
  }, 2000)
})

const title = '数字股权'
const bannerList = reactive([
  {
    img: "https://stock.shall-buy.cn/storage/upload/2023-01-09/25oWsNhOrOGbe3nQ3aCwmhq3SCCAV8QeTCoblAkm.jpg",
    name: ""
  }
])
const noticeContent = `重要通知：数字股权升级啦！

经过了一段时间的试运行，结合后台数据运行情况及市场反馈情况，为了销巴数字股权更规范的运作，销巴数字股权升级正式启动。标准规则为：

1.交易日(每天9:00开盘，21:00收盘，收盘后不能兑换原始股，不能交易买卖，不能提现，可以竞价挂单) 。

2.当日新兑换或买入的股权下个交易日才能卖出 。

3.当日卖出得到的余额下个交易日才能提现。


详情请查看帮助中心`

</script>

<template>
  <main class="main">
    <NavBar :title="title" :class-name="'imgBg'" :fixed="true" />
    <div class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList">
          <van-image :src="item.img" radius="8"></van-image>
        </van-swipe-item>
      </van-swipe>
      <div class="notice">
        <van-image src="https://stock.shall-buy.cn/assets/homeNotice.ae8c574d.svg" />
        <span style="margin: 0px 1rem; color: rgba(0, 0, 0, 0.12); position: relative; top: -2px;">|</span><span
          class="notice_content">{{ noticeContent }}</span>
      </div>
      <div class="card direct">
        <table style="width: 100%; text-align: center; border-spacing: 0px;">
          <tr>
            <td class="buyAmount">2.95亿</td>
            <td class="buyAmount">2.95亿</td>
            <td class="buyAmount">50.00亿</td>
            <td class="buyAmount">50.00亿</td>
          </tr>
          <tr>
            <td class="buyLabel">流通股</td>
            <td class="buyLabel">流通值</td>
            <td class="buyLabel">总股本</td>
            <td class="buyLabel">总市值</td>
          </tr>
        </table>
        <van-divider style="margin: 0.5rem 0px 0.9rem -0.8rem; width: 109%;" />
        <div style="display: flex; justify-content: space-between;">
          <div>
            <span style="font-size: 22px; color: rgb(255, 0, 0); font-weight: 600;">1.00</span> <span>发行价</span>
          </div>
          <van-button round class="homeBuy">快速兑换</van-button>
        </div>
      </div>
      <div class="card direct" style="height:243px">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: rgb(255, 11, 64); font-size: 18px; font-weight: 600;">0.25</span>
          <div>
            <span style="color: rgb(102, 102, 102); font-size: 12px; margin-right: 5px;">最高</span>
            <span style="color: rgb(255, 11, 64); font-size: 12px; font-weight: 500;">1100.00</span>
          </div>
          <div>
            <span style="color: rgb(102, 102, 102); font-size: 12px; margin-right: 5px;">最低</span>
            <span style="color: rgb(82, 196, 26); font-size: 12px; font-weight: 500;">0.01</span>
          </div>
          <div>
            <span style="color: rgb(102, 102, 102); font-size: 12px; margin-right: 5px;">交易金额</span>
            <span style="color: rgb(51, 51, 51); font-size: 12px; font-weight: 500;">18.55万</span>
          </div>
        </div>
        <van-tabs v-model:active="tabActive" title-active-color="#ee0a24" line-width="14" @click-tab="onClickTab">
          <van-tab v-for="(item, index) in tabs" :key="index" :title="item.name">
          </van-tab>
          <div v-show="chartLoading">
            <van-skeleton title :row="2" style="margin-top: 2rem;" />
          </div>
          <div class="chart" ref="chartRef"></div>
        </van-tabs>
      </div>
      <div class="direct">
        <van-image radius="8"
          src="https://stock.shall-buy.cn/storage/upload/2023-01-09/3CuL7Thjo5pKSS5Hs6aLrebd2HglnuCFhuI3NsEM.jpg"></van-image>
      </div>
      <div class="card direct card-reset" style="width: 100%; --9a7abb90:#fff;">
        <div class="card-title" style="display: flex;">
          <van-image src="https://stock.shall-buy.cn/assets/slogan.8653164b.svg"></van-image>
          <span style="margin-left: 0.8rem; font-weight: 600;">概况</span>
        </div>
        <van-divider style="margin: 0.5rem 0px 0.9rem -0.8rem; width: 109%;"></van-divider>

        <div>
          <p>
            <img src="https://stock.shall-buy.cn/ueditor/php/upload/image/20230116/1673840759415993.jpg">
          </p>
        </div>
      </div>
    </div>
    <TabBar />
  </main>
</template>

<style scoped>
.main {
  background: rgb(245, 245, 245);
  overflow: hidden;
  min-height: 100vh;
}

.content {
  padding: 1rem;
  margin-bottom: 4.5rem;
}

.notice {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.8rem;
}

.notice_content {
  font-size: 14px;
  position: relative;
  top: -2px;
  color: #000c;
}

.card {
  border-radius: 8px;
  padding: 0.8rem;
  background: #fff;
}

.direct {
  margin-top: 1rem;
}

.buyAmount {
  font-weight: 500;
  color: #000c;
  font-size: 16px;
}

.buyLabel {
  font-size: 12px;
  color: #0006;
}

.homeBuy {
  background: linear-gradient(90deg, #ff7641 0%, #ff0b40 100%);
  color: #fff;
  width: 96px;
  height: 24px;
  line-height: 24px;
}

::v-deep .van-tabs__wrap {
  width: 70%;
  margin-left: -0.8rem;
  z-index: 1;
}

::v-deep .van-tabs__line {
  top: 37px;
  background: #ee0a24;
}

.chart {
  width: 356px;
  height: 243px;
  top: -3rem;
  position: relative;
}

.card-reset.card {
  padding: 0.8rem 0 !important;
}

.card-reset .card-title {
  padding: 0 0.8rem !important;
}
</style>