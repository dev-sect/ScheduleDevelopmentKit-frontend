<template>
  <div :class="['sidebar-btn', classObject]" @click="setSelected">
      <img :src="this.imgButtonObj" alt="">
      <p>
        {{ getTextButton }}
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
      if(this.$route.path != this.getPathButton){
        this.$router.push(this.getPathButton)
      }
    },
  },
  computed: {
    classObject(){
      return {
        selected: this.$route.matched[0].name == this.btnType,
      }
    },
    imgButtonObj(){
      return require(`../assets/icons/SidebarButtons/${this.$route.matched[0].name == this.btnType ? this.getImgActiveButton : this.getImgButton}`)
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
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/sidebar/sidebar-btn";
</style>