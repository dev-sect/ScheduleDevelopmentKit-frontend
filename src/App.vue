<template>
  <div class="div">
    <ButtonToAddTeacher></ButtonToAddTeacher>
    <Input placeholder="example@itmo.ru" type-obj="e-mail" head-value="E-mail" error-value="Введите корректный e-mail"/>
    <Input placeholder="Ваш пароль" type-obj="password" head-value="Пароль" errorValue="Пароль должен содержать минимум 8 символов и одну цифру"/>
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
