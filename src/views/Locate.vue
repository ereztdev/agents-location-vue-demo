<template>
  <div class="about">
    <h1 style="color: red">LOCATE</h1>
    <Map></Map>
  </div>
</template>

<style lang="scss">
.about {
  h1 {
    color: darkred;
  }
}
</style>
<script>
  import Map from '/src/components/Map'
  // import ComponentC from './ComponentC'

  export default {
    components: {
      Map,
      // ComponentC
    },
    // ...
  }
</script>
