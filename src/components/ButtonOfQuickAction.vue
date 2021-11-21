<template>
    <div class='button-of-quick-action' @click="showAlert" :style="{backgroundColor:bgColor}">
        <div class="content-of-block">
            <div class="name-of-block">
                {{ headText }}
                <img :src="icon" alt="timeTable" style="margin-left: 10px;"/>
            </div>
            <div class="main-text-of-block">
                {{ mainText }}
            </div>
        </div>
    </div>
</template>

<script>
import TypeCards from "../store/modules/quickActions.js"

export default {
    name: "QuickAction",
    props: {
        type: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            icon: String,
            bgColor: String,
            headText: String,
            mainText: String,
        }
    },
    methods: {
        showAlert() {
            alert("Nice, it's working...");
        }
    },
    mounted() {

        for(let value of Object.values(TypeCards)){
            if (this.type === value.name) {
                this.icon = `require(${value.data.icon})`;
                this.bgColor = value.data.backgroundColor;
                this.headText = value.data.textHeading;
                this.mainText = value.data.describeText;
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/button-quick-action.scss';
</style>