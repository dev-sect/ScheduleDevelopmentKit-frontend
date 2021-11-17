<template>
	<button class='button-add-teacher'>{{textButton}}</button>
</template>

<script>
export default {
	name: "ButtonToAddTeacher",
	data() {
	return {
		textButton: 'Добавить'
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/button-teacher.scss';
</style>
