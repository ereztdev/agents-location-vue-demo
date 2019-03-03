/* eslint-disable no-alert, no-console */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosen_agent: {},
    address: "",
    latLng: ""
  },
  mutations: {
    panTo(state, latLng) {
      state.latLng = latLng;
    },
    change(state, chosen_agent) {
      state.chosen_agent = chosen_agent;
      state.address = chosen_agent.address;
    }
  },
  actions: {
    newAddress(context, coords) {
      context.commit("panTo", coords);
    }
  },
  getters: {
    chosen_agent: state => state.chosen_agent,
    latLng: state => state.latLng
  }
});
