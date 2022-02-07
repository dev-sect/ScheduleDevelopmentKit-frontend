<template>
  <div class="sidebar">
    <div class="sidebar_content">
      <SidebarButton btn-type="main"/>
      <SidebarButton btn-type="settings"/>
    </div>
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
.sidebar{
  display: flex;
  height: 100vh;
  align-items: center;
  border-right: 0.1vw solid #F3F3F3;
  background: rgba(248, 248, 248, 0.46);
}
.sidebar_content{
  height: 80%;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column
}
@import "src/assets/styles/components/sidebar/sidebar";
</style>