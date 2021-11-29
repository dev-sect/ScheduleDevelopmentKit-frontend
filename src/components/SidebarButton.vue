<template>
  <div :class="['sidebar-btn', { selected: isSelected }]" @click="setSelected">
      <img :src="icon" alt="">
      <p>
        {{ btnText }}
      </p>
  </div>
</template>

<script>
export default {
  name: "SidebarButton",
  data() {
    return {
      btnText: "Text",
      icon: require("../assets/styles/icons/SidebarButtons/SidebarButtonIconGrey.svg"),
      isSelected: false
    }
  },
  methods: {
    setSelected() {
      this.isSelected = true
      this.icon = require("../assets/styles/icons/SidebarButtons/SidebarButtonIcon.svg")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/sidebar-btn";
</style>