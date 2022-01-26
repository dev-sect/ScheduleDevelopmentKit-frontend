<template>
  <div class="pages">
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
.pages{
  display: flex;
}
</style>