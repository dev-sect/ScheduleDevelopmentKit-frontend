<template>
  <div :class="['sidebar-btn', classObject]" @click="setSelected">
      <img :src="this.imgButtonObj" alt="">
      <p>
        {{ getTextButton() }}
      </p>
  </div>
</template>

<script>
import {textButton, imgButton, pathButton, imgButtonActive} from '@/store/enums/sideBarButton-data-enums';

export default {
  name: "SidebarButton",
  props: {
    btnType: {
      type: String
    }
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    setSelected() {
      if(this.$route.path != this.getPathButton()){
        this.$router.push(this.getPathButton())
      }
    },
    getTextButton() {
      return textButton[this.btnType];
    },
    getImgButton(){
      return imgButton[this.btnType];
    },
    getImgActiveButton(){
      return imgButtonActive[this.btnType];
    },
    getPathButton(){
      return pathButton[this.btnType];
    }
  },
  mounted() {
    console.log(this.imgButtonObj)
  },
  computed: {
    classObject: function(){
      return {
        selected: this.$route.path == this.getPathButton(),
      }
    },
    imgButtonObj: function (){
      return require(`../assets/styles/icons/SidebarButtons/${this.$route.path == this.getPathButton() ? this.getImgActiveButton() : this.getImgButton()}`)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/sidebar-btn";
</style>