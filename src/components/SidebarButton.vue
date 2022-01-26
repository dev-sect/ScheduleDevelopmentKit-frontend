<template>
  <div :class="['sidebar-btn', classObject]" @click="setSelected">
      <img :src="'../assets/styles/icons/SidebarButtons/SidebarButtonIconGrey.svg'" alt="">
      <p>
        {{ textButton[btnType] }}
      </p>
  </div>
</template>

<script>
import {textButton, imgButton, imgButtonActive, pathButton} from '@/store/enums/sideBarButton-data-enums';

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
      textButton: textButton,
      pathButton: pathButton,
    }
  },
  methods: {
    setSelected() {
      if(this.$route.path != pathButton[this.btnType]){
        this.$router.push(pathButton[this.btnType])
      }
    }
  },
  computed: {
    classObject: function(){
      return {
        selected: this.$route.path == pathButton[this.btnType],
      }
    },
    imgButtonObj: function (){
      return this.$route.path == pathButton[this.btnType] ? imgButtonActive[this.btnType] : imgButton[this.btnType];
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/sidebar-btn";
</style>