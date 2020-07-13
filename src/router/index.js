import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Login from "@/views/Login.vue";
import Sign from "@/views/Sign.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Top, name: "Top"},
  { path: "/login", component: Login, name: "Login"},
  { path: "/sign", component: Sign, name: "Sign"},
  { path: "/home", component: Home, name: "Home"},
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
