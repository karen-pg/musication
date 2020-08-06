import Vue from "vue";
import VueRouter from "vue-router";
const Top = () => import("@/views/Top.vue");
const Login = () => import("@/views/Login.vue");
const Sign = () => import("@/views/Sign.vue");
const Appli = () => import("@/views/Appli_views/Appli.vue");
const Home = () => import("@/views/Appli_views/Home.vue");
const Board = () => import("@/views/Appli_views/Board.vue");
const Music = () => import("@/views/Appli_views/Music.vue");
const Genre = () => import("@/views/Appli_views/Genre.vue");
const Search = () => import("@/views/Appli_views/Search.vue");
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
      { path: "search", component: Search, name: "Search" },
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
