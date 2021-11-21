<template>
  <div>
    <ButtonToAddTeacher></ButtonToAddTeacher>
    <QuickAction :type="action.TIMETABLE.name"></QuickAction>
  </div>
</template>

<script>
import ButtonToAddTeacher from './components/ButtonToAddTeacher.vue'
import QuickAction from './components/QuickAction.vue'
import quickActions from "@/store/modules/quickActions";

export default {
    name: 'App',
    data() {
        return {
            action: quickActions
        }
    },
    components: {
        ButtonToAddTeacher,
        QuickAction
    }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
