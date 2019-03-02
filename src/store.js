import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosen_agent:{}
  },
  mutations: {
    change(state, chosen_agent) {
      state.chosen_agent = chosen_agent;
    }
  },
  actions: {},
  getters: {
    chosen_agent: state => state.chosen_agent
  }
});
