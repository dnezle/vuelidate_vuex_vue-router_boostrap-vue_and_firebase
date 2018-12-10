// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuelidate from "vuelidate";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Dashboard from "./components/Dashboard";
import About from "./components/About";

import { store } from "./stores/store";

import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";

import { DialogInstaller } from "@progress/kendo-dialog-vue-wrapper";
import { KendoPopupsInstaller } from "@progress/kendo-popups-vue-wrapper";

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(DialogInstaller);
Vue.use(KendoPopupsInstaller);

Vue.config.productionTip = false;

const routes = [
  { path: "/", name: "home", component: Dashboard },
  { path: "/about", component: About }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
