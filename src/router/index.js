import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Menu from "@/views/Menu.vue";
import Info from "@/views/Info.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Top },
  { path: "/menu", component: Menu },
  { path: "/info", component: Info },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
