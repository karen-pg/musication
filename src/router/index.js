import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Login from "@/views/Login.vue";
import Sign from "@/views/Sign.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Top },
  { path: "/login", component: Login },
  { path: "/sign", component: Sign },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
