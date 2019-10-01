<template lang="pug">
  .h3.w-100.flex.flex-row.justify-end.items-center.router
    router-link(to="/").mr4 Services
    router-link(to="../Process").mr4 Process
    router-link(to="../Contact").mr4 Contact
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "NavBar"
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
#navbar {
}
</style>
