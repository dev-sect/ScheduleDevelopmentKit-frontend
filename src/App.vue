<template>
    <div id="app">
      <div class="pagesLayout">
        <div class="pagesLayout_contentLeft">
          <SideBar/>
        </div>
        <div class="pagesLayout_contentRight">
          <HeaderBar/>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>

import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
export default {
    name: 'App',
    components: {
      HeaderBar,
      SideBar
    },
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
.pagesLayout{
  display: flex;
}
</style>
