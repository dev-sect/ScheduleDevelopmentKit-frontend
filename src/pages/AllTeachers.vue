<template>
<div class="allTeachers">
  <h1>Преподаватели</h1>
  <div class="buttons">
    <button class="filter">
      <p>
        Фильтры
      </p>
      <img :src="require(`../assets/icons/AllTeacher/filterIcon.svg`)" alt="">
    </button>
  <ButtonToAddTeacher class="add"/>
  </div>
  <div class="allTeachersCards">
    <TeacherCard
        v-for="current in this.allTeachers"
        :teacher-info="current"
        :key="current.fullName"
        class = "teacher-card"
    />
  </div>
</div>
</template>

<script>
import ButtonToAddTeacher from "@/components/ButtonToAddTeacher";
import {allTeachers} from "@/store/modules/teachers";
import TeacherCard from "@/components/TeacherCard";
export default {
name: "AllTeachers",
  components: {TeacherCard, ButtonToAddTeacher},
  data() {
   return {
     allTeachers: allTeachers
   }
  }
}
</script>

<style scoped lang="scss">
.buttons{
  display: flex;
  justify-content: space-between;
  .add{
    margin: 0;
  }
}
.filter{
  display: flex;
  font-weight: 700;
  font-size: 1.25em;
  background-color: #F3F3F3;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  img{
    width: 1.25em;
    height: 1em;
    margin-left: 0.2em;
  }
}
.allTeachersCards{
  display: flex;
  margin-top: 3.33em;
  .teacher-card{
    margin-right: 2em;
  }
}
</style>