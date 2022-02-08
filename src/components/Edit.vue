<template>
  <img class="edit-btn" :src="icon" alt="edit" @click="Click">
</template>

<script>

export default {
  name: "Edit",
  data() {
    return {
      icon: require("../assets/icons/Edit/edit.svg")
    }
  },
  methods: {
    Click() {
      alert("hello");
    }
  }
}
</script>

<style scoped lang="scss">
.edit-btn {
  cursor: pointer;
}
</style>