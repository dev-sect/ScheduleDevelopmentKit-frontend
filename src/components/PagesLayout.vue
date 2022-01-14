<template>
  <div class="">
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "@/components/SideBar";
export default {
  name: "PagesLayout",
  components: {Sidebar}
}
</script>

<style scoped>

</style>