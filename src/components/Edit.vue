<template>
  <span><img class="edit-btn" :src="icon" alt="edit" @click="click"></span>
</template>

<script>

export default {
  name: "Edit",
  computed: {
    icon() {
      return require("../assets/icons/Edit/edit.svg");
    }
  },
  methods: {
    click() {
      this.$emit('change');
    }
  }
}
</script>

<style scoped lang="scss">
.edit-btn {
  cursor: pointer;
}
</style>