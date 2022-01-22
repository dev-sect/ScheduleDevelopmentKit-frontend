<template>
  <div class="">
    <button @click="setStorage"> {{nameBtn[typeBtn]}} </button>
  </div>
</template>

<script>
import nameBtn from "@/store/enums/buttonToAuth-data-enums";
export default {
  name: "ButtonToAuth",
  props: {
    typeBtn: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      nameBtn: nameBtn,
    }
  },
  methods: {
    setStorage() {
      localStorage.setItem('authInfo', JSON.stringify(true));
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang = scss>
@import "../assets/styles/components/ButtonToAuth.scss";
</style>