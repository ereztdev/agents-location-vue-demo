<template>
  <div id="agentList--wrapper">
    <ul>
      <li
        class="agent"
        v-for="(agent, index) in agents"
        v-bind:key="index"
        v-bind:title="agent.agent"
        v-on:remove="agents.splice(index, 1)"
        v-on:click="changed(agent.address)"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        {{ agent.agent }} - {{agent.address}}
      </li>
    </ul>
  </div>
</template>

<script>
import LocationService from "@/services/LocationService";

export default {
  /* eslint-disable no-alert, no-console */
  name: "Agents",
  components: {
    // agent_item
  },
  data() {
    return {
      hoveredElement: "",
      agents: [],
      hover: false,
      address: ''
    };
  },
  methods: {
    async getAgents() {
      const response = await LocationService.getLocation({
        hoveredElement: this.hoveredElement
      });
      // this.agents = response.data.results[0];
      // console.log("got agents", response.data/*.data.results[0]*/);
      this.agents = response.data;
    },
    changed: function(event) {
      // alert(event);
      // this.$refs.mapRef.$mapPromise.then((map) => {
      //   map.panTo(event)
      // })
      this.address = event;
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo(this.address)
      })
      alert(event);
    }
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
