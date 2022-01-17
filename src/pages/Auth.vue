<template>
  <div class="mainPage">
    <div class="leftPart">
      <div class="container">
        <h3>
          Новое расписание для первого неклассического
        </h3>
        <p>
          Yet another service. В новом дизайне. С новым функционалом 🎉
        </p>
      </div>
    </div>
    <div class="rightPart">
      <div class="container">
        <img :src=icon alt="">
        <div class="Input-container">
          <Input type-obj="email" class = "Input"/>
          <Input type-obj="password" class = "Input"/>
          <p>Тут появится чекбокс как только я сделаю его компонент, оказывается он не сделан(</p>
          <ButtonToAuth type-btn="auth"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Input from "@/components/Input";
import ButtonToAuth from "@/components/ButtonToAuth";

export default {
  name: "Auth",
  data() {
    return {
      icon: {
        type: String
      },
    }
  },
  components: {
    ButtonToAuth,
    Input
  },
  mounted() {
    this.icon = require(`../assets/styles/icons/AuthPage/ItmoLogo.svg`);
  }
}

</script>

<style scoped lang="scss">
@import '../assets/styles/components/AuthPage.scss';
</style>