<template>
  <div class="container">
    <div class="top-part">
      <Input type-obj="lastname"></Input>
    </div>
    <div class="bottom-part">
      <input type-obj="name" class="name-input" placeholder="Имя">
      <input type-obj="patronymic" class="patronymic-input" placeholder="Отчество">
    </div>
  </div>
</template>

<script>

import Input from "./Input";
export default {
  name: "FullNameInput",
  components: {
    Input
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/base/fonts";
@import "src/assets/styles/helpers/variables";
@import "src/assets/styles/helpers/mixins";
@import "src/assets/styles/helpers/visual";
@import "src/assets/styles/helpers/typography";

.container {
  width: 27vw;
  height: 20vh;
  //margin: 0 auto;
  //background-color: gray;
}

.bottom-part  {
  display: flex;
  align-items: center;

  .name-input, .patronymic-input {
    margin-top: 0.7vw;
    padding: 1vw 2vw;
    background-color: #F3F3F3;
    border-radius: 0.65vw;
    border: 0;
    outline-color: #2543AD;
    outline-width: 3px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
    height: auto;
    font-size: $input-fontSize;
    font-weight: $input-fontWeight;
    color: $input-color;
    &::placeholder {
      font-size: $input-PlaceHolder-fontSize;
      font-weight: $input-PlaceHolder-fontWeight;
      line-height: $input-PlaceHolder-fontLine;
      color: $text__default-color--gray;
    }
  }

  .name-input {
    width: 55%;
  }

  .patronymic-input {
    width: 45%;
    margin-left: 4px;
  }
}

</style>