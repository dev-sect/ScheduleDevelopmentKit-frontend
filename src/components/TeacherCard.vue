<template>
  <div class="teacher-card" @click="goToTeacher">
    <div class="teacher-full-name">{{ teacherInfo.teacherInfo.fullName }}</div>
    <div class="teacher-info">
      <ul class="info-list">
        <li class="info-row" v-for="(contact, fieldName) in teacherInfo.teacherInfo.contacts" :key="fieldName"><img :src="contact.icon" alt="">{{ contact.data }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherCard",
  props: {
    teacherInfo:{
      required: true
    }
  },
  methods: {
    goToTeacher() {
      alert("Hello, world!")
      console.log(this.teacherInfo.teacherInfo)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/teacher-card.scss";
</style>