<template>
  <div class="label-block">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Label",
  props: {
    title: {
      required: true,
      text: String
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/label.scss";
</style>