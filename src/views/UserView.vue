<!--
 * @Description: User page
 * @Author: Kerwin
 * @Date: 2023-02-16 14:25:22
 * @LastEditTime: 2023-02-21 16:05:56
 * @LastEditors:  Please set LastEditors
-->
<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const themeVars = reactive({
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: "none",
  buttonPrimaryBackgroundColor: "linear-gradient(90deg, #FF7641 0%, #FF0B40 100%)",
  cellIconSize: '22px'
})
const actionList = reactive([
  {
    name: "买入",
    src: "https://stock.shall-buy.cn/assets/buy.bb38bf52.svg"
  },
  {
    name: "卖出",
    src: "https://stock.shall-buy.cn/assets/sellOrder.19836654.svg"
  }, {
    name: "持仓",
    src: "https://stock.shall-buy.cn/assets/holdOrder.ab27d754.svg"
  }, {
    name: "撤单",
    src: "https://stock.shall-buy.cn/assets/cancelOrder.a317a7d2.svg"
  },
])
interface pageItem {
  name: string,
  icon: string,
  path: string,
}
const pageActions: Array<pageItem> = reactive([
  {
    name: "公告通知",
    icon: "notes-o",
    path: "/notice"
  },
  {
    name: "意见反馈",
    icon: "comment-o",
    path: "/feedback"
  }, {
    name: "帮助中心",
    icon: "service-o",
    path: "/service"
  }, {
    name: "用户协议",
    icon: "records",
    path: "/protocol"
  },
])
const toBalance = () => {
  router.push({
    path: "/balance"
  })
}
const handleLogOut = () => {
  router.replace({
    path: "/login"
  })
}
const toMyTransaction = (type: any) => {
  router.push({
    path: "/myTransaction",
    query: {
      type,
    }
  })
}
const navigateTo = (obj: pageItem) => {
  router.push({
    path: obj.path,
  })
}
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="user-wrapper">
      <div class="user-info">
        <van-image round width="50" height="50" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></van-image>
        <div style="margin-left: 15px; font-weight: 500;">未设置昵称</div>
      </div>
      <div class="money-card card-box">
        <div class="balance-box" @click="toBalance">
          <div class="balance-title"><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABUBJREFUWMPtmHloVFcUxsfaVSkVu+BWofSPWgRpSWYyM0mcySSzmaVjllaKWosgtpRailaNJpPNmIxmNDGJiSZO1KppNGrcgsQlCS5JxFZbRYS2KIKlhQoilComX7/73ptNE23h6j/NhR/nvnvP+c737ryZSUanGx7DY3jIH+jLGYeezDnoy6zH91lduJh9A5dybuPKh/cZ7+BC9k2cz+5BX1YTerMW4rTn7adj7Hi6DSc8h9Ht6cfpmUBvJmgCOE9+yAaNqYjrc6SH+yKv2wN0es7g2AcfPRlj2xyj0Z6xC0czwCbACdLFpqfY/MxM1UhfpmpKxLMaQXMnPWqdqD+S0YVW53h55lpyRqItrRsH0ymerjbp0EyKxt0awkyQ4FqnR83rCJpjvdBpS/sZ+zxjJBlMnY/WVGBfGnCAHHrA6DGNk9pJnYxY68hQ89rT1TpRv58IvdYZ5XIMNs8I4LsZwG6yN1VtEDR6mLRrBo5mhAmuHXnAmKjfQ4TeLvcZSc+fqwU73EJQFd6dqp6AaNaWFiZo+mBa9PpeLVfcoKhvJkJvu+uCHINbXNvR5BSCwLcU3ulWmwRPNZLW1PB8jzYXuc1anWoM2EqaXL2yDH6JRhrc4hSiFNfMCna6H0/Q1DaXWi+0FFzVcgwGrC9S7DIaKNrgDDcIGh6UiL2Altuo1asaf6DRPkGOwc3uSdjoeAMNrlOhBo+i8XE5rqsIOKagxvGmJIPOPBRMfR7QjeBJzmOTn/6V0Ye5zvolqHK/oOjWO1fJMbjR0YI6xwE0ZrwcWtvk0vNkV7BpO0/kGja7+hUTmzUanANcv8l4grGUp5okPvCVWq/1WdS5qmjwkhyDtY5aAtQ6f0ONcxGbjh302yZgHYONtoliH/Uxzz2UU582CnX22dS5qurZO+UYrHbYUW1HiFrHXT4/HZwXcu5Bjf09bHG/rhjw6p6B3/QSqpNfRbVzKmpTUpm7jKbamHeHWmGdGvsiOQbFS1KdvBZVKVDYECTC9KPYEFET1jgoPh3kGFyfrFdiZcoCVNpuoTIZIapSHk9kfmXy36RIuWm/zSDHYIUtgHUp7ypzP5+vSttimr6M9bYBrLOBc41B5mJfybFd5/UqrE+ZrOistb5Gg0fkGFxrbUZF0p80mhO1XmWdBL91Fg0UkG3wJ+0nHZwfYNxBU6tRYZ3H+ilRdX5LIvV+4d6PcgyusRTBZ4HCGst5rLF+wbuf+J80/Kax8CXNZX1HSMtn3SPHYIlpIsoSb6NsOlAegc9yDeWWfZyvY1xCPqeBT1FuXcj4Na99KLO0MO8KfNMHeK3WlSUK+pljkvUuHoPSxHiUJtzCaooPhdJ4epih8koT7nL/Y6Erx+CqhLlK9FnHcb6VDe4xYlBKh1hX9wZIO4qN6huuJP4TOQaLzC0oNi8NG04cjxLzNyhJOMb4F4rjwf1B4HqJ+R5jDyki74QfG3MWryX9wVpgDqDABHII3rhp0S8/vzmKDW+h0JRMZvJmZqNQNDc74DVNwYLorzx44yczrwGFxn7GPjkG803zkR8HFeMAG5+D15hLrFga88qjn9+YUcgzxrHmK3Kc9fdDWl5jhRyDObqRyIvrxkoDFPLiosk33mK8xKa9yDd0Mp4lF7n+O9cHonJDGoZfaXisvP+NF08bjZX6XcjVAysEhkGiYYj1iCjqVxq64X1/gu5JDIrbsDz2MOkniEaPh9ciyNWfRW7sLOh0I578bzQF+nFsOgfLYutJF5bG3mC8zXgfy2LukJukB8tjmshnWBLzdH48Gh7D4/84/gFrXjx7xJQLMQAAAABJRU5ErkJggg=="
              width="20" alt=""><span>余额</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAGZQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcGyU1gAAACJ0Uk5TAAIDBAUGBwgJDA8QERIUFhcZGx0fJScoKSorLC0uLzEyM74ZjjwAAABzSURBVDjL7dNHDoAwDERReu+E3jL3vyTiBl+IJbN+UmzHdpw/3yc2KYNGV4ZgcsrmTB6yJatyl62QjDapRjJcpQbJYJFaJP1Z6pD0JqlH0h0lw+QA66SQPk2boeOhA6dfSJeCrhld3OcUim+Pi57rn7e5AUN2CcHQhRDGAAAAAElFTkSuQmCC"
              width="20" alt="">
          </div>
          <div class="balance-number">0.00</div>
        </div>
        <div class="money-other">
          <div class="money-other-l">
            <div class="balance-title"><span>股权金</span><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAGZQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcGyU1gAAACJ0Uk5TAAIDBAUGBwgJDA8QERIUFhcZGx0fJScoKSorLC0uLzEyM74ZjjwAAABzSURBVDjL7dNHDoAwDERReu+E3jL3vyTiBl+IJbN+UmzHdpw/3yc2KYNGV4ZgcsrmTB6yJatyl62QjDapRjJcpQbJYJFaJP1Z6pD0JqlH0h0lw+QA66SQPk2boeOhA6dfSJeCrhld3OcUim+Pi57rn7e5AUN2CcHQhRDGAAAAAElFTkSuQmCC"
                width="20" alt=""></div>
            <div class="money-number">0.00</div>
          </div>
          <div class="money-other-r">
            <div class="balance-title">累计收益</div>
            <div class="money-number">0.00</div>
          </div>
        </div>
      </div>
      <div class="action-list card-box">
        <div class="action-list-item" v-for="(item, index) in actionList" :key="index" @click="toMyTransaction(index)">
          <van-image :src="item.src" round></van-image>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="action-group card-box" style="padding: 1.5rem 0px;">
        <van-cell v-for="(item, index) in pageActions" :key="index" :title="item.name" :icon="item.icon" size="large"
          is-link clickable @click="navigateTo(item)"> </van-cell>
      </div>
      <div style="margin-top: 3rem; padding: 0px 2.5rem;">
        <van-button class="btn" round type="primary" size="normal" plain text="退出" @click="handleLogOut" />
      </div>
      <div style="text-align: center; margin: 11px 0px 0px;">
        <p style="font-size: 13px; color: rgba(0, 0, 0, 0.6);">四川黑银科技</p>
        <p style="font-size: 12px; color: rgba(0, 0, 0, 0.4); margin-top: 4px;">4000-571-671</p>
      </div>
    </div>
    <TabBar />
  </van-config-provider>
</template>

<style scoped>
.user-wrapper {
  padding: 2.75rem 1rem 1.5rem;
  margin-bottom: 50px;
  overflow: scroll;
  background: no-repeat top/100% url(data:image/png;base64,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), #F5F6F8;
}

.user-info {
  display: flex;
  margin-top: .5rem;
  margin-bottom: 1.6rem;
  color: #fff;
  align-items: center;
}

.money-card {
  height: 204px;
  margin-top: 12px;
  padding: 24px 15px;
  font-size: 14px;
}

.card-box {
  background: #ffffff;
  border-radius: 12px;
}

.money-card .balance-box {
  width: max-content;
}

.money-card .balance-title {
  display: flex;
  color: #000c;
}

.money-card .balance-box .balance-number {
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
}

.money-card .money-other {
  display: flex;
  margin-top: 41px;
}

.money-card .money-other .money-other-l {
  flex: 1;
  color: #fc740c;
}

.money-card .money-other .money-other-r {
  flex: 1;
  padding-left: 2rem;
}

.money-card .money-other .money-number {
  font-size: 18px;
}

.action-list {
  display: flex;
  justify-content: space-evenly;
  margin-top: 12px;
  padding: 25px 0;
}

.action-list .action-list-item {
  text-align: center;
}

.action-group {
  margin-top: 12px;
}

.btn {
  height: 44px;
  width: 100%;
  background: #EBEBEB;
  border-radius: 24px;
  border: 1px solid #CCCCCC;
}
</style>