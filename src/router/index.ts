import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const routes = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/user",
    name: "我的",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/trade",
    name: "交易",
    component: () => import("../views/TradeView.vue"),
  },
  {
    path: "/myTransaction",
    name: "我的交易",
    component: () => import("../views/TransactionView.vue"),
  },
  {
    path: "/balance",
    name: "我的余额",
    component: () => import("../views/BalanceView.vue"),
  },
  {
    path: "/notice",
    name: "公告通知",
    component: () => import("../views/NoticeView.vue"),
  },
  {
    path: "/noticeDetail",
    name: "公告通知详情",
    component: () => import("../views/NoticeDetailView.vue"),
  },
  {
    path: "/feedback",
    name: "意见反馈",
    component: () => import("@/views/FeedBackView.vue"),
    children: [
      {
        path: "/record",
        name: "反馈记录",
        component: () => import("@/views/FeedBackRecordView.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
