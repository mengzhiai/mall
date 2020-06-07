/*
 * @Author: jun
 * @Date: 2020-05-21 22:06:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 17:05:47
 * @FilePath: \mall\src\router\index.js
 * @Description:
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
    // redirect: "/",
    children: [
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
