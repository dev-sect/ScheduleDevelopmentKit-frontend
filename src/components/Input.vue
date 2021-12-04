<template>
  <div>
    <div class="headInput">
      <p> {{headValue}} </p>
    </div>
    <input
        :type="typeObj"
        @keydown.enter="checkCorrectValue"
        @change="checkCorrectValue"
        v-model="value"
        :class='{"password": this.typeObj === "password", "e-mail": this.typeObj === "e-mail"}'>
    <div class="errorText"> {{errorValue}}</div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ['typeObj', 'headValue', 'ClassName', 'errorValue'],

  data() {
    return {
      value: '',
      multipleTypeInput: {

        phone: {
          regular: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/,
          errorMessage: 'Введите корректный номер телефона'
        },
        'e-mail': {
          regular: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMessage: 'Введите корректный e-mail'
        },
        password: {
          regular: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          errorMessage: 'Пароль должен содержать: минимум 8 символов, хотя бы одну цифру'
        }
      }
    }
  },

  methods: {
    checkCorrectValue() {
      let type = this.typeObj;
      const elemInput = this.$el.querySelector('input');
      if (this.multipleTypeInput[type]['regular'].test(this.value)) {
        if (elemInput.classList.contains('errorInput')){
          elemInput.classList.remove('errorInput');
            this.$el.querySelector('.errorText').style.display = "none";

        }
      } else {
          this.$el.querySelector('.errorText').style.display = "block";
          elemInput.classList.add('errorInput');
      }
    }
  }
}
/*
В общем-то:
phone - для телефонов
e-mail - для почт
password - для паролей
 */

</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>



