<template>
  <div>
    <div class="headInput">
      <h3> {{getHeadValue(this.typeObj)}} </h3>
    </div>
      <input
          :type="typeObj"
          v-model="value"
          :placeholder="getPlaceHolder(this.typeObj)"
          :class="[classObject, typeInput[this.typeObj.toUpperCase()]]"
      >
    <div class="errorText" v-if = "!getRegular(this.typeObj).test(this.value)"> {{getErrorMessage(this.typeObj)}}</div>
  </div>
</template>


<script>
import {errorMessage, headValue, inputTypes, placeHolder, regular} from '@/store/enums/input-data-enums';
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
    }
  },
  methods: {
    getRegular(){
      return regular[this.typeObj.toUpperCase()];
    },
    getErrorMessage(){
      return errorMessage[this.typeObj.toUpperCase()];
    },
    getPlaceHolder(){
      return placeHolder[this.typeObj.toUpperCase()];
    },
    getHeadValue(){
      return headValue[this.typeObj.toUpperCase()];
    },
  },
  computed:{
    classObject: function(){
      return {
        errorInput: !regular[this.typeObj.toUpperCase()].test(this.value),
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>



