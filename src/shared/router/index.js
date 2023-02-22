import Vue from "vue";
import VueRouter from "vue-router";
import * as HomeRoutes from "../../modules/home/routes";
import * as AboutRoutes from "../../modules/about-software/routes";

Vue.use(VueRouter);

const routes = [...Object.values(HomeRoutes), ...Object.values(AboutRoutes)];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
