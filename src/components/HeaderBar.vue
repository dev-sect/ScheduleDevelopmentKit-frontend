<template>
  <div class="">
    <div class="header_top">
      <div class="header_top-input">
        <input type="text" placeholder="Найдётся всё">
      </div>
      <div class="notification">
        <img src="../assets/styles/icons/HeaderBar/Notifications.svg" alt="">
      </div>
      <div class="preview">
        <img :src="getImgUserIcon" alt="">
      </div>
    </div>
    <div class="header_bottom">
      {{this.getTextUser}}
    </div>
  </div>
</template>

<script>

import textHeader from "@/store/enums/headerBar-data-enums";

export default {
  name: "HeaderBar",
  computed: {
    getImgUserIcon: function (){
      return JSON.parse(localStorage.getItem('userInfo')).imgSrc;
    },
    getTextUser: function (){
      return this.$route.path.split('/').slice(1,this.$route.path.split('/').length).map((item)=>{return textHeader[item]}).join(' / ')
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/helpers/mixins.scss";
@import "src/assets/styles/helpers/typography";
@import "src/assets/styles/helpers/variables";


.header_top {
  display: flex;
  align-items: center;
}

input {
  @include input();
  width: 50vw;
  height: 2.4vw;
  padding: 0.5vw 5vw;
  border-radius: 0.3vw;
  background-image: url("../assets/styles/icons/HeaderBar/search.svg");
  background-repeat: no-repeat;
  background-position: 1.2vw;
  background-size: 1.05vw;
  margin-right: 10vw;
}

.notification {
  img {
    width: 2vw;
  }
  margin-right: 2vw;
  cursor: pointer;
}

.preview{
  img{
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
  }

  cursor: pointer;
}

.header_bottom{
  @include textPlain;
  font-size: $input-PlaceHolder-fontSize;
  font-weight: $input-PlaceHolder-fontWeight;
  color: $text__default-color--gray;
}
</style>