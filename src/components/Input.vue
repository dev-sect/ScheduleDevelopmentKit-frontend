<template>
  <div>
    <div class="headInput">
      <h3> {{multipleTypeInput[this.typeObj]['headValue']}} </h3>
    </div>
    <input
        :type="typeObj"
        v-model="value"
        :placeholder="multipleTypeInput[this.typeObj].placeholder"
        :class="[classObject, typeInput[this.typeObj.toUpperCase()]]"
    >
    <div class="errorText" v-if = "multipleTypeInput[this.typeObj]['regular'].test(this.value) == false"> {{multipleTypeInput[this.typeObj].errorMessage}}</div>
  </div>
</template>


<script>
import {inputTypes} from '@/store/enums';
export default {
  name: "Input",
  props: {
    typeObj:{
      type: String,
      required: true
    },
  },
  data() {
    return {
      value: null,
      typeInput: inputTypes,
      multipleTypeInput: {

        phone: {
          regular: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/,
          errorMessage: 'Введите корректный номер телефона',
          placeholder: '+79999999999',
          headValue: "Телефон",
        },
        'e-mail': {
          regular: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMessage: 'Введите корректный e-mail',
          placeholder: 'example@itmo.ru',
          headValue: "E-mail"
        },
        password: {
          regular: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          errorMessage: 'Пароль должен содержать: минимум 8 символов, хотя бы одну цифру',
          placeholder: 'Ваш пароль',
          headValue: "Пароль"
        }
      },
    }
  },
  computed:{
    classObject: function(){
      return {
        errorInput: this.multipleTypeInput[this.typeObj]['regular'].test(this.value) == false,
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>



