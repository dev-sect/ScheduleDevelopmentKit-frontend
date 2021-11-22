<template>
  <div class="teacher-card" @:click="goToTeacher">
    <div class="teacher-full-name">{{ teacherInfo.fullName }}</div>
    <div class="teacher-info">
      <ul class="info-list">
        <li class="info-row" v-for="(contact, fieldName) in teacherInfo.contacts" :key="fieldName"><img :src="contact.icon" alt="">{{ contact.data }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherCard",
  data() {
    return {
      teacherInfo: {
        fullName: "Маятин Александр Владимирович",
        contacts: {
          isuNumber: { data: 308373, icon: require("../icons/isuNumber.svg") },
          mail: { data: "mayatin@itmo.ru", icon: require("../icons/mail.svg") },
          phoneNumber: { data: "+7 999 999 99 99", icon: require("../icons/phoneNumber.svg") }
        }
      }
    }
  },
  methods: {
    goToTeacher() {
      alert("Hello, world!")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/teacher-card.scss";
</style>