<template>
    <div>
        <ButtonToAddTeacher></ButtonToAddTeacher>
        <QuickAction type="AddTimetable"></QuickAction>
        <QuickAction type="NewEvent"></QuickAction>
        <QuickAction type="NewCouple"></QuickAction>
        <QuickAction type="Report"></QuickAction>
        <QuickAction type="Timetable"></QuickAction>
        <QuickAction type="DiffTimetable"></QuickAction>
        <QuickAction type="Teachers"></QuickAction>
        <QuickAction type="Export"></QuickAction>
        <QuickAction type="Import"></QuickAction>
        <QuickAction type="ImportFromISU"></QuickAction>
    </div>
</template>

<script>
import ButtonToAddTeacher from './components/ButtonToAddTeacher.vue'
import QuickAction from './components/QuickAction.vue'

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
