<template>
    <div class='button-of-quick-action' @click="showAlert">
      <div class="content-of-block">
          <div class="name-of-block">
              {{ textHeading }}
              <img :src="icon"  alt="timeTable" style="margin-left: 10px;"/>
          </div>
          <div class="main-text-of-block">
              {{ describeText }}
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "ButtonOfQuickAction",
    data() {
        return {
            textHeading: 'Расписание',
            describeText: 'Можно увидеть данные о студентах и преподавателях',
            icon: require('../icons/buttonOfQuickAction/timetable.svg')
        }
    },
    methods: {
        showAlert() {
            alert("Nice, it's working...");
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/button-quick-action.scss';
</style>