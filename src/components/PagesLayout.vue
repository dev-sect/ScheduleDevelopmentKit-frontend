<template>
  <div class="pagesLayout">
    <div class="pagesLayout_contentLeft">
      <Sidebar/>
    </div>
    <div class="pagesLayout_contentRight">
      <HeaderBar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
export default {
  name: "PagesLayout",
  components: {HeaderBar, Sidebar},
}
</script>

<style scoped>
.pagesLayout{
  display: flex;
}
</style>