<template>
  <div id="agentList--wrapper">
    <ul>
      <li
        class="agent"
        v-for="(agent, index) in agents"
        v-bind:key="agent.fake_loc"
        v-bind:title="agent.fake_loc"
        v-on:remove="agents.splice(index, 1)"
        v-on:click="changed()"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        {{agent.fake_loc}}
      </li>
    </ul>
  </div>
</template>

<script>
  import LocationService from '@/services/LocationService'

  export default {
  /* eslint-disable no-alert, no-console */
  name: "Agents",
  components:{
    // agent_item
  },
  data() {
    return {
      hoveredElement:'',
      agents: [
        { fake_loc: 123 },
        { fake_loc: 452 },
        { fake_loc: 452 },
        { fake_loc: 452 },
        { fake_loc: 152323 }
      ],
      hover: false,

    };
  },
  methods: {
    async getAgents() {
      const response = await LocationService.getWord({ word: this.hoveredElement })
      this.agents = response.data.results[0]
      console.log("got agents");

    },
    changed: function(event) {
      alert(event.target.value);
    }
  },
  computed: {},
  created() {},
  mounted() {
    // this.getAgents();
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
    font-size: 50px;
    transition: 0.65s ease-in-out;
    &:hover {
      cursor: pointer;
      background: tomato;
    }
  }
}
</style>
