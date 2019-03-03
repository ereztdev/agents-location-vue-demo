/* eslint-disable no-alert, no-console */

import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import dotenv from "dotenv";
//todo:dotenv not responding well, check
// const config = dotenv.config();
// if (config.error) {
//   console.log("Could not load env file", config.error);
// }

import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQymb4_DrSm1r9kHmDS6MDPQtVCa6bD-U",
    libraries: "places"
  }
});
Vue.component("Agents", require("./components/Agents.vue")); //component name should be in camel-case

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
