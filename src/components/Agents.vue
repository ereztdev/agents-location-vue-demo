<template>
  <div id="agentList--wrapper">
    <ul>
      <li
        class="agent"
        is="agent-item"
        v-for="(agent, index) in agents"
        v-bind:key="agent.id"
        v-bind:title="agent.title"
        v-on:remove="agents.splice(index, 1)"
        v-on:click="
          this.$refs.mapRef.$mapPromise.then(map => {
            map.panTo({ lat: 1.38, lng: 103.8 });
          })
        "
      >
        {{agent.fake_loc}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-alert, no-console */

  name: "Agent",
  data() {
    return {
      agents: [
        { fake_loc: 123 },
        { fake_loc: 452 },
        { fake_loc: 452 },
        { fake_loc: 452 },
        { fake_loc: 152323 }
      ]
    };
  },
  methods: {
    getAgents() {
      console.log("got agents");
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
    font-size: 50px;
    transition: 0.65s ease-in-out;
    &:hover {
      cursor: pointer;
      background: tomato;
    }
  }
}
</style>
