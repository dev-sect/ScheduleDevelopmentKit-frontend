<template>

  <input
      :type="type"
      v-on:click="setType">

</template>

<script>
export default {

  name: "Input",

  data() {
    return {
      type: "text",
    }
  },

  methods: {
    setType() {
      console.log(this);
      if (this.$el.classList.contains('password')) {
        this.type = 'password';
      } else {
        this.type = 'text';
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>