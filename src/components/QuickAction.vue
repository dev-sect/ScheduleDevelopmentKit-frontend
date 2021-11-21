<template>
    <div class='button-of-quick-action' @click="showAlert" :style="{backgroundColor: bgColor}">
        <div class="content-of-block">
            <div class="name-of-block">
                {{ headText }}
                <span style="display: flex; align-items: center">
                    <TimeTable class="logo" v-if="this.type === types.TIMETABLE.name"/>
                </span>
            </div>
            <div class="main-text-of-block">
                {{ mainText }}
            </div>
        </div>
    </div>
</template>

<script>
import TypeCards from "../store/modules/quickActions.js"
import TimeTable from "../assets/styles/icons/buttonOfQuickAction/timetable.svg"

export default {
    name: "QuickAction",
    props: {
        type: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            bgColor: "",
            headText: "",
            mainText: "",
            types: TypeCards
        }
    },
    methods: {
        showAlert() {
            alert("Nice, it's working...");
        }
    },
    mounted() {
        for (let value of Object.values(TypeCards)) {
            if (this.type === value.name) {
                this.bgColor = value.data.backgroundColor
                this.headText = value.data.textHeading
                this.mainText = value.data.describeText
            }
        }
    },
    components: {
        TimeTable
    },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/components/quick-action';

.logo {
    margin-left: 10px;
}
</style>