<template>
<!--  <button :class="['sidebar-btn', { selected: isSelected }]" @click="setSelected">-->
<!--    <img :src="icon" alt="">-->
<!--    <p>-->
<!--      {{ btnText }}-->
<!--    </p>-->
<!--  </button>-->
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
@import "../assets/styles/helpers/variables";
@import "../assets/styles/helpers/typography";
@import "../assets/styles/base/common";
@import "../assets/styles/helpers/visual";

.sidebar-btn {
  // Temporary margin
  margin: 30px 300px;
  //
  width: 18.7rem;
  height: 3.5rem;
  background-color: $background-color;
  @include textPlain;
  font-weight: bold;
  font-size: 1.5rem;
  color: $text__default-color--gray;
  //background-color: $background-color;
  display: flex;
  align-items: center;

  &:hover {
    background-color: $item__state-background--blur;
  }

  img {
    color: $text__default-color--gray;
    fill: $text__default-color--gray;
    margin-left: 3.7rem;
  }
  p {
    margin: 0 0 0 1rem;
  }
}
.selected {
  color: $university__brand-color;
  &::before {
    content: "";
    border-color: $university__brand-color;
    border-style: solid;
    border-bottom-width: 3.4rem;
    border-radius: 0 $borderRadius $borderRadius 0;
  }
}
</style>