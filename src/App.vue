<template>
  <div>
    <ButtonToAddTeacher></ButtonToAddTeacher>
    <QuickAction type="Timetable"></QuickAction>
  </div>
</template>

<script>
import ButtonToAddTeacher from './components/ButtonToAddTeacher.vue'
import QuickAction from './components/ButtonOfQuickAction.vue'

export default {
    name: 'App',
    components: {
        ButtonToAddTeacher,
        QuickAction
    }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
