<template>
  <div class="AuthPage">
    <div class="AuthPage_leftPart">
      <div class="container">
        <h3>
          Новое расписание для первого неклассического
        </h3>
        <p>
          Yet another service. В новом дизайне. С новым функционалом 🎉
        </p>
      </div>
    </div>
    <div class="AuthPage_rightPart">
      <div class="container">
        <img :src=icon alt="">
        <div class="Input-container">
          <Input type-obj="email" class = "Input"/>
          <Input type-obj="password" class = "Input"/>
        </div>
          <div class="checkbox">
            <input class="input" type="checkbox" id="checkbox" v-model="checkbox.state"/>
            <label class="label" for="checkbox">Запомнить меня</label>
          </div>
          <ButtonToAuth type-btn="auth" :checked="checkbox.state"/>
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
      checkbox:{
          state: false
      }
    }
  },
  components: {
    ButtonToAuth,
    Input
  },
  mounted() {
    this.icon = require(`../assets/styles/icons/AuthPage/ItmoLogo.svg`);
  },
}

</script>

<style scoped lang="scss">
@import '../assets/styles/components/AuthPage.scss';
.checkbox{
  .label{
    &:after{
      background: url( "../assets/styles/icons/AuthPage/checked.svg") no-repeat;
      background-size: 0.6vw 0.8vw;
    }
  }
}
</style>