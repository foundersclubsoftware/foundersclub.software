<template lang="pug">
  div(id="App")
    NavBar
    router-view
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
export default Vue.extend({
  name: "App",
  components: {
    NavBar
  }
});
</script>

<style scoped lang="scss">
#App {
  font-family: "Roboto", sans-serif;
}
</style>
