<template>
<div class="mainPage">
  <h1>Быстрые действия</h1>
  <div class="view">
    <h3>Просмотреть</h3>
    <div class="content">
      <QuickAction v-for="card in viewContentCards" :key="card" :type="card" class = "quickAction"/>
    </div>
  </div>
  <div class="create">
    <h3>Создать</h3>
    <div class="content">
      <QuickAction v-for="card in createContentCards" :key="card" :type="card" class = "quickAction"/>
    </div>
  </div>
  <div class="other">
    <h3>Другое</h3>
    <div class="content">
      <QuickAction v-for="card in otherContentCards" :key="card" :type="card" class = "quickAction"/>
    </div>
  </div>
</div>
</template>

<script>
import QuickAction from "@/components/QuickAction";
export default {
  name: "Main",
  components: {QuickAction},
  computed: {
    viewContentCards(){
      return ['Timetable','Teachers','DiffTimetable']
    },
    createContentCards(){
      return ['AddTimetable','NewEvent','NewCouple','Report']
    },
    otherContentCards() {
      return ['Export', 'Import', 'ImportFromISU']
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/components/MainPage";
</style>