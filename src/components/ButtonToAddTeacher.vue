<template>
    <div class='button-add-teacher' @click="showAlert">{{ textButton }}</div>
</template>

<script>
export default {
    name: "ButtonToAddTeacher",
    data() {
        return {
            textButton: 'Добавить'
        }
    },
    methods: {
        showAlert() {
            alert("Nice, it's working...");
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/button-teacher.scss';
</style>
