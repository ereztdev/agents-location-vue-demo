<template>
  <div id="agentList--wrapper">
    <ul>
      <li
        class="agent"
        v-for="(agent, index) in agents"
        v-bind:key="index"
        v-bind:title="agent.agent"
        v-on:remove="agents.splice(index, 1)"
        v-on:click="panTo(agent)"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        {{ agent.agent }} - {{ agent.address }}
      </li>
    </ul>
  </div>
</template>

<script>
import LocationService from "@/services/LocationService";

//todo: create seperate async file
const axios = require("axios");
const apiKey = "&key=" + process.env.VUE_APP_GOOGLE_API_KEY;
const geoParserUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?address=";
export default {
  /* eslint-disable no-alert, no-console */
  name: "Agents",
  components: {},
  data() {
    return {
      hoveredElement: "",
      agents: [],
      hover: false
    };
  },
  methods: {
    async getAgents() {
      const response = await LocationService.getLocation({
        hoveredElement: this.hoveredElement
      });
      this.agents = response.data;
    },
    panTo: function(agentObj){
      let locationResponse = null;
      axios
        .get(geoParserUrl + agentObj.address + apiKey)
        .then((response) => {
          locationResponse = response.data.results[0]["geometry"].location;
          this.$store.dispatch("newAddress", locationResponse);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.getAgents();
  }
};
</script>

<style scoped lang="scss">
#agentList--wrapper {
  position: fixed;
  right: 0;
  height: 100vh;
  width: calc(50vw - 17px);
  background: darkred;
  z-index: 0;
}
ul {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  .agent {
    display: block;
    background: darkorange;
    width: 50vw;
    text-align: left;
    font-size: 20px;
    transition: 0.65s ease-in-out;
    &:hover {
      cursor: pointer;
      background: tomato;
    }
  }
}
</style>
