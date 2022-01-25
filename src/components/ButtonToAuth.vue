<template>
  <div>
    <button> {{nameBtn[typeBtn]}} </button>
  </div>
</template>

<script>
export default {
  name: "ButtonToAuth",
  props: {
    typeBtn: {
      type: String,
      required: true
    },
    checked: Boolean
  },
  data(){
    return {
      nameBtn: {
        reg: "Зарегистрироватся",
        auth: "Войти"
      }
    }
  },
}
</script>

<style scoped lang = scss>
@import "../assets/styles/components/ButtonToAuth.scss";
</style>