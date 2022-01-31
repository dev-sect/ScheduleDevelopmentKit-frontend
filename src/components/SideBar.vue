<template>
<div class="sidebar">
  <SidebarButton btn-type="main"/>
  <SidebarButton btn-type="settings"/>
</div>
</template>

<script>
import SidebarButton from "@/components/SidebarButton";
export default {
name: "SideBar",
  components: {SidebarButton},
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/components/sidebar/sidebar";
</style>