import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Fortune from "@/views/fortune/Fortune.vue";
import FortuneRecords from "@/views/fortune/Records.vue";
import Upload from "@/views/Upload.vue";
import Poker from "@/views/Poker.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/fortune",
    component: Home,
    meta: {
      title: "",
    },
  },
  {
    path: "/fortune",
    name: "fortune",
    component: Fortune,
    meta: {
      title: "",
    },
    children: [
        { path: "records", component: FortuneRecords },
        { path: "analysis", component: () => import("@/views/fortune/Analysis.vue") },
    ],
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
    meta: {
      title: "",
    },
  },
  {
    path: "/poker",
    name: "poker",
    component: Poker,
    meta: {
      title: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
