<template>
  <div class="createTeacher">
    <h1>Создать преподавателя</h1>
    <div class="lastName">
      <Input type-obj="lastName"/>
    </div>
    <div class="nameAndPatronymic">
      <div class="input_first">
        <Input type-obj="name"/>
      </div>
      <div class="input_second">
        <Input type-obj="PATRONYMIC"/>
      </div>
    </div>
      <div class="email">
        <Input type-obj="email"/>
      </div>
      <div class="phone">
        <Input type-obj="phone"/>
      </div>
    <button class = "save"> Сохранить </button>
  </div>
</template>

<script>
import Input from "@/components/Input";
export default {
name: "CreateTeacher",
  components: {Input}
}
</script>

<style lang="scss">
@import "src/assets/styles/components/MainPage";
@import "src/assets/styles/components/CreateTeacher";
@import "src/assets/styles/components/ButtonToAuth";
h1{
  font-size: 2em;
}
.headInput{
    font-size: 1em !important;
}
.createTeacher{
  input{
    padding: 1em 2em;
    font-size: 1.1em;
  }
}
.lastName{
  h3{
    margin-bottom: 0.5em;
  }
  input{
    width: 43em;
  }
}
.nameAndPatronymic{
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 2em;
  .input_first{
      width: 26em;
    input{
      width: 100%;
    }
  }
  .input_second{
      width: 20em;
    input{
      width: 100%;
    }
  }
  width: 47.2em;
}

.email{
  h3{
    margin-bottom: 0.5em;
  }
  input{
    width: 43em !important;
  }
  margin-bottom: 1.5em;
}
.phone{
  h3{
    margin-bottom: 0.5em;
  }
  input{
    width: 43em;
  }
}
.save{
  margin: 0;
  margin-top: 8em;
  padding: 1em 6em;
}
</style>