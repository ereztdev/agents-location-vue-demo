/* eslint-disable no-alert, no-console */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: "",
    latLng: ""
  },
  mutations: {
    panTo(state, latLng) {
      state.latLng = latLng;
    },
  },
  actions: {
    newAddress(context, coords) {
      context.commit("panTo", coords);
    }
  },
  getters: {
    latLng: state => state.latLng
  }
});
