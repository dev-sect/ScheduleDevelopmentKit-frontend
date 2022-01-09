<template>
  <div>
    <div class="headInput">
      <h3> {{headValue}} </h3>
    </div>
    <input
        :type="typeObj"
        v-model="value"
        :placeholder="multipleTypeInput[this.typeObj].placeholder"
        :class="[{errorInput:multipleTypeInput[this.typeObj]['regular'].test(this.value) == false}, typeInput[this.typeObj]]"
    >
    <div class="errorText" v-if = "multipleTypeInput[this.typeObj]['regular'].test(this.value) == false"> {{multipleTypeInput[this.typeObj].errorMessage}}</div>
  </div>
</template>


<script>
export default {
  name: "Input",
  props: {
    typeObj: String,
    headValue: String
  },
  data() {
    return {
      value: null,
      typeInput: {
       "password": "password",
        "e-mail": "e-mail",
        "phone": "phone"
      },
      multipleTypeInput: {

        phone: {
          regular: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/,
          errorMessage: 'Введите корректный номер телефона',
          placeholder: '+79999999999',
        },
        'e-mail': {
          regular: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMessage: 'Введите корректный e-mail',
          placeholder: 'example@itmo.ru',
        },
        password: {
          regular: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          errorMessage: 'Пароль должен содержать: минимум 8 символов, хотя бы одну цифру',
          placeholder: 'Ваш пароль',
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

        }
      } else {
          elemInput.classList.add('errorInput');
      }
    }

  },
  mounted: function() {
    Object.freeze(this.typeInput);
  }

}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>



