<template>
  <div class="div">
    <ButtonToAddTeacher></ButtonToAddTeacher>
    <Input type-obj="e-mail" head-value="E-mail"/>
    <Input type-obj="password" head-value="Пароль"/>
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
