<template>
  <div class="teacher-card">
    <div class="teacher-full-name">{{ fullName }}</div>
    <div class="teacher-info">
      <ul class="info-list">
        <li class="info-row" v-for="info in teacherInfo" :key="info">{{ info }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherCard",
  data() {
    return {
      fullName: "Маятин Александр Владимирович",
      teacherInfo: [308373, "mayatin@itmo.ru", "+7 999 999 99 99"]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/teacher-card.scss";
</style>