<template>
  <div class="map--wrapper">
    <GmapMap
      ref="mapRef"
      id="map"
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
export default {
  name: "Map",
  data() {
    return {
      markers: ["32.0853,34.7818"],
    };
  },
  methods: {
    mapInit() {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$store.watch(
      (state, getters) => getters.latLng,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`);
        this.$refs.mapRef.$mapPromise.then(map => {
          map.panTo(
            newValue
              ? { lat: newValue.lat, lng: newValue.lng }
              : { lat: 34.0853, lng: 32.7818 }
          );
        });
      }
    );
    this.mapInit();
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 32.0853, lng: 34.7818 });
    });
  }
};
</script>

<style scoped lang="scss">
.map--wrapper {
  position: relative;
  width: 50%;
  #map {
    position: fixed;
    width: 50vw;
    height: 100vh;
    z-index: -1;
  }
}
</style>
