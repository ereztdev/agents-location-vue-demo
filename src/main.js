/* eslint-disable no-alert, no-console */

import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dotenv from "dotenv";

const config = dotenv.config();
if (config.error) {
  console.log("Could not load env file", config.error);
}

import * as VueGoogleMaps from "vue2-google-maps";
// console.log(process.env);

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQymb4_DrSm1r9kHmDS6MDPQtVCa6bD-U",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
