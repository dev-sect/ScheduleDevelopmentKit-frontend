<template>
  <div class="">
    <div class="header">
      <div class="header_top">
        <div class="header_top-input">
          <input type="text" placeholder="Найдётся всё">
        </div>
        <div class="right_content">
          <div class="notification">
            <img src="../assets/icons/HeaderBar/Notifications.svg" alt="">
          </div>
          <div class="preview">
            <img :src="getImgUserIcon" alt="">
          </div>
        </div>
      </div>
      <div class="header_bottom">
        {{getTextHeader}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HeaderBar",
  computed: {
    getImgUserIcon() {
      return "https://sun1-23.userapi.com/6oBSdyQn_doyOA9S4kb2eSbISxp24vIqDjdWTA/AyAz6fmJ0mo.jpg";
    },
    getTextHeader() {
      return this.$route.matched.map(currentRoute=>{return currentRoute.meta.name}).join(' / ')
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
  margin-top: 0.8vw;
  justify-content: space-between;
}

input {
  @include input();
  width: 52vw;
  height: 2.4vw;
  padding: 0.5vw 5vw;
  border-radius: 0.3vw;
  background-image: url("../assets/icons/HeaderBar/search.svg");
  background-repeat: no-repeat;
  background-position: 1.2vw;
  background-size: 1.05vw;
}

.notification {
  img {
    width: 2vw;
  }

  margin-right: 3vw;
  cursor: pointer;
}

.preview {
  img {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
  }

  cursor: pointer;
}
.right_content{
  display: flex;
  align-items: center;
}
.header_bottom {
  @include textPlain;
  font-size: $input-PlaceHolder-fontSize;
  font-weight: $input-PlaceHolder-fontWeight;
  color: $text__default-color--gray;
}
</style>