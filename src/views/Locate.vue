<template>
  <div class="locate">
    <Map id="theMap"></Map>
    <Agents></Agents>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,800,900');
  #nav{
    a{
      color: #000;
      font-size: 55px;
      margin: auto 100px;
      font-family: 'Raleway', sans-serif;
      text-decoration:none
    }
  }
  .agentList--wrapper{
    background: aqua;
  }
</style>
<script>
import Map from "@/components/Map.vue";
import Agents from "@/components/Agents.vue";

export default {
  name: "App",
  components: {
    Map,
    Agents
  }
};
</script>
