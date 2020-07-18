import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Login from "@/views/Login.vue";
import Sign from "@/views/Sign.vue";
import Home from "@/views/Home.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Top, name: "Top" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/sign", component: Sign, name: "Sign" },
  { path: "/home", component: Home, name: "Home" },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
