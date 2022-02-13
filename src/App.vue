<template>
    <div id="app">
<!--      <div class="pagesLayout">-->
<!--        <div class="pagesLayout_contentLeft">-->
<!--          <SideBar v-if = "$route.path.indexOf('/auth')==-1"/>-->
<!--        </div>-->
<!--        <div class="pagesLayout_contentRight">-->
<!--          <HeaderBar v-if = "$route.path.indexOf('/auth')==-1"/>-->
<!--          <router-view></router-view>-->
<!--        </div>-->
<!--      </div>-->
      <Edit @change="change"></Edit>
    </div>
</template>

<script>

// import SideBar from "@/components/SideBar";
// import HeaderBar from "@/components/HeaderBar";
import Edit from "@/components/Edit";

export default {
    name: 'App',
    components: {
      Edit
    },
    methods: {
      change() {
        alert('h')
      }
    }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
.pagesLayout{
  display: flex;
}
</style>
