<template>
  <div class="div">
    <ButtonToAddTeacher></ButtonToAddTeacher>
    <Input class="e-mail" placeholder="example@itmo.ru"/>
    <Input class="password" placeholder="Ваш пароль"/>
  </div>
</template>

<script>
import ButtonToAddTeacher from './components/ButtonToAddTeacher.vue'
import Input from "./components/Input.vue" ;

export default {
  name: 'App',
  components: {
    Input,
    ButtonToAddTeacher
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
