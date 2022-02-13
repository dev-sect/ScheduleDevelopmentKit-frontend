<template>
  <span><img class="edit-btn" :src="data.icon" alt="edit" @click="$emit('change')"></span>
</template>

<script>

export default {
  name: "Edit",
  computed: {
    data() {
      return {
        icon: require("../assets/icons/Edit/edit.svg")
      }
    }
  },
}
</script>

<style scoped lang="scss">
.edit-btn {
  cursor: pointer;
}
</style>