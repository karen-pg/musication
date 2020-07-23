import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Login from "@/views/Login.vue";
import Sign from "@/views/Sign.vue";
import Appli from "@/views/Appli_views/Appli.vue";
import Home from "@/views/Appli_views/Home.vue";
import Board from "@/views/Appli_views/Board.vue";
import Music from "@/views/Appli_views/Music.vue";
import Genre from "@/views/Appli_views/Genre.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

const routes = [
  { path: "/top", component: Top },
  { path: "/login", component: Login },
  { path: "/sign", component: Sign },
  {
    path: "/appli/",
    component: Appli,
    children: [
      { path: "home", component: Home, name: "Home" },
      { path: "board", component: Board, name: "Board" },
      { path: "music", component: Music, name: "Music" },
      { path: "genre", component: Genre, name: "Genre" },
    ],
  },
  { path: "*", redirect: "/Top" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
