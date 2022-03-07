<template>
  <div class="teacher-card" @click="goToTeacher">
    <div class="teacher-full-name">{{ teacherInfo.teacherInfo.fullName }}</div>
    <div class="teacher-info">
      <ul class="info-list">
        <li class="info-row">
          <img :src="require(`../assets/icons/TeacherCard/isuNumber.svg`)" alt="">
          {{ teacherInfo.teacherInfo.contacts.isuNumber.data }}
        </li>
        <li class="info-row">
          <img :src="require(`../assets/icons/TeacherCard/mail.svg`)" alt="">
          {{ teacherInfo.teacherInfo.contacts.mail.data }}
        </li>
        <li class="info-row">
          <img :src="require(`../assets/icons/TeacherCard/phoneNumber.svg`)" alt="">
          {{ teacherInfo.teacherInfo.contacts.phoneNumber.data }}
        </li>
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