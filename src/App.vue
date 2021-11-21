<template>
  <span>
    <ButtonToAddTeacher></ButtonToAddTeacher>
    <ButtonOfQuickAction></ButtonOfQuickAction>
  </span>
</template>

<script>
import ButtonToAddTeacher from './components/ButtonToAddTeacher.vue'
import ButtonOfQuickAction from './components/ButtonOfQuickAction.vue'

export default {
    name: 'App',
    components: {
        ButtonToAddTeacher,
        ButtonOfQuickAction
    }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
