<template>
<div class="teacherPage">
  <h1>
    {{name}}
  </h1>
  <div class="categories">
    <div class="category" v-for="category in arrCategories">
      <p>
        {{textCategory}}
      </p>
    </div>
  </div>

</div>
</template>

<script>
export default {
name: "Teacher"
}
</script>

<style scoped>

</style>