<template>

  <input
      :type="type"
      v-on:click="setType"
      v-on:change="checkCorrectValue"
      v-model="value">
</template>

<script>
export default {

  name: "Input",

  data() {
    return {
      type: "text",
      value: '',
    }
  },

  methods: {

    setType() {
      if (this.$el.classList.contains('password')) {
        this.type = 'password';
      } else {
        this.type = 'text';
      }
    },

    checkCorrectValue() {
      if (this.$el.classList.contains('phone')) {
        let phoneRegular = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
        if (phoneRegular.test(this.value)) {
          if (this.$el.classList.contains('errorInput')) this.$el.classList.remove('errorInput');
        } else {
          this.$el.classList.add('errorInput');
        }
      }

      if (this.$el.classList.contains('e-mail')) {
        let emailRegular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (emailRegular.test(this.value)) {
          if (this.$el.classList.contains('errorInput')) this.$el.classList.remove('errorInput');
        } else {
          this.$el.classList.add('errorInput');
        }
      }
    }

  },
}

/*
В общем-то:
phone - для телефонов
e-mail - для почт
password - для паролей
 */


</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>



