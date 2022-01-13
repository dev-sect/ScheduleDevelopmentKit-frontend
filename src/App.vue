<template>
    <div id="app">
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
        <TeacherCard></TeacherCard>
        <SidebarButton></SidebarButton>
        <Label title="Операционные системы"></Label>
        <Input type-obj="email"/>
        <Input type-obj="password"/>
    </div>
</template>

<script>
import ButtonToAddTeacher from './components/ButtonToAddTeacher.vue'
import QuickAction from './components/QuickAction.vue'
import TeacherCard from "./components/TeacherCard"
import SidebarButton from "./components/SidebarButton";
import Label from "./components/Label";

export default {
    name: 'App',
    components: {
        ButtonToAddTeacher,
        QuickAction,
        TeacherCard,
        SidebarButton,
        Label,
        Input,
    }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
