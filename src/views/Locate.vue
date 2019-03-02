<template>
  <div class="locate">
    <Map id="theMap"></Map>
    <Agents></Agents>
  </div>
</template>

<style lang="scss"></style>
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
