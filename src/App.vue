<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    },
  mounted() {
      if(this.$route.path != (JSON.parse(localStorage.getItem('authInfo')) ? '/' : '/auth')){
        this.$router.push(JSON.parse(localStorage.getItem('authInfo')) ? '/' : '/auth');
      }
  }

}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
