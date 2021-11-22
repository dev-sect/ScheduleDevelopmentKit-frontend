<template>
    <div class='button-of-quick-action' @click="showAlert" :class="'button-of-quick-action_' + bgColor">
        <div class="content-of-block">
            <div class="name-of-block">
                {{ headText }}
                <img :src="icon" alt="timeTable" style="margin-left: 0.75rem;"/>
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
        for (let [index, value] of Object.values(TypeCards).entries()) {
            if (this.type === value.name) {
                this.bgColor = index + 1;
                this.icon = require(`../icons/buttonOfQuickAction/${value.data.icon}`);
                this.headText = value.data.textHeading;
                this.mainText = value.data.describeText;
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/helpers/variables";
@import '../assets/styles/components/button-quick-action.scss';

.button-of-quick-action {
    &_1 {
        background: $quick__btn-background-1;
        border-color: $quick__btn-background-1;

        &:hover {
            background: $quick__btn-background-1-hover;
        }
    }

    &_2 {
        background: $quick__btn-background-2;
        border-color: $quick__btn-background-2;

        &:hover {
            background: $quick__btn-background-2-hover;
        }
    }

    &_3 {
        background: $quick__btn-background-3;
        border-color: $quick__btn-background-3;

        &:hover {
            background: $quick__btn-background-3-hover;
        }
    }

    &_4 {
        background: $quick__btn-background-4;
        border-color: $quick__btn-background-4;

        &:hover {
            background: $quick__btn-background-4-hover;
        }
    }

    &_5 {
        background: $quick__btn-background-5;
        border-color: $quick__btn-background-5;

        &:hover {
            background: $quick__btn-background-5-hover;
        }
    }

    &_6 {
        background: $quick__btn-background-6;
        border-color: $quick__btn-background-6;

        &:hover {
            background: $quick__btn-background-6-hover;
        }
    }

    &_7 {
        background: $quick__btn-background-7;
        border-color: $quick__btn-background-7;

        &:hover {
            background: $quick__btn-background-7-hover;
        }
    }

    &_8 {
        background: $quick__btn-background-8;
        border-color: $quick__btn-background-8;
        color: $background-color;

        .name-of-block {
            color: $background-color;
        }

        &:hover {
            background: $quick__btn-background-8-hover;
        }
    }

    &_9 {
        background: $quick__btn-background-8;
        border-color: $quick__btn-background-8;
        color: $background-color;

        .name-of-block {
            color: $background-color;
        }

        &:hover {
            background: $quick__btn-background-8-hover;
        }
    }

    &_10 {
        background: $university__brand-color;
        border-color: $university__brand-color;
        color: $background-color;

        .name-of-block {
            color: $background-color;
        }

        &:hover {
            background: $university__brand-color--hover;
        }
    }
}

</style>