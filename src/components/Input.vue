<template>
  <div>
    <div class="headInput">
      <h3> {{getHeadValue}} </h3>
      <Edit v-if="checkHasChangeIcon" @change="setReadOnly"/>
    </div>
      <input
          :type="typeObj"
          :placeholder="getPlaceHolder"
          :readOnly="this.readOnly"
          v-model = "value"
          :class="[classObject, typeInput[this.typeObj.toUpperCase()]]"
      >
    <div class="errorText" v-if = "!getRegular.test(this.value)"> {{getErrorMessage}}</div>
  </div>
</template>


<script>
import {errorMessage, headValue, inputTypes, placeHolder, regular, hasChangeIcon} from '@/store/enums/input-data-enums';
import Edit from "@/components/Edit";
export default {
  name: "Input",
  components: {Edit},
  props: {
    typeObj:{
      type: String,
      required: true
    },
    readOnlyProps:{
      type: String,
      required: true
    },
    textContent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: null,
      typeInput: inputTypes,
      readOnly: this.readOnlyProps
    }
  },
  mounted() {
    if(this.readOnly){
      this.value = this.textContent;
    }
  },
  methods: {
    setReadOnly(){
        this.readOnly = false;
        document.querySelector('.name').readOnly = false
        document.querySelector('.patronymic').readOnly = false;
    }
  },
  computed:{
    classObject: function(){
      return {
        errorInput: !regular[this.typeObj.toUpperCase()].test(this.value),
      }
    },
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
    checkHasChangeIcon(){
      return hasChangeIcon[this.typeObj.toUpperCase()];
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/Input.scss';
</style>



