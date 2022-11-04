import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import HowToUse from "../pages/HowToUse.vue";
import Contacts from "../pages/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/how-to-use",
    name: "HowToUse",
    component: HowToUse,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/client",
    name: "Client",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Client.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
