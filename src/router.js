import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Catalog from "./views/Catalog.vue";
import Textile from "./views/Textile.vue";


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
    ,
    {
      path: "/catalog",
      name: "catalog",
      component: Catalog
    },
    {
      path: "/textile",
      name: "textile",
      component: Textile
    }
  ]
});



export default router;