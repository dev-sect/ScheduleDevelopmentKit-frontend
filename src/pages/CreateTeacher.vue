<template>
  <div class="createTeacher">
    <div class="headerTeacher">
      <div class="withName">
        <h1 v-if="renderCheck">
          {{ nameAndFull }}
        </h1>
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6.25781 22.6543H15.252C16.8242 22.6543 17.8203 21.7363 17.8887 20.1543L18.543 6.18945H19.5488C20.0957 6.18945 20.5156 5.7793 20.5156 5.23242C20.5156 4.69531 20.0957 4.28516 19.5488 4.28516H15.291V2.84961C15.291 1.29688 14.3047 0.388672 12.6055 0.388672H8.88477C7.18555 0.388672 6.20898 1.29688 6.20898 2.84961V4.28516H1.96094C1.42383 4.28516 0.994141 4.69531 0.994141 5.23242C0.994141 5.7793 1.42383 6.18945 1.96094 6.18945H2.9668L3.62109 20.1641C3.68945 21.7363 4.67578 22.6543 6.25781 22.6543ZM8.20117 2.92773C8.20117 2.45898 8.52344 2.16602 9.03125 2.16602H12.459C12.9766 2.16602 13.2988 2.45898 13.2988 2.92773V4.28516H8.20117V2.92773ZM6.50195 20.7305C5.96484 20.7305 5.60352 20.3496 5.57422 19.7734L4.92969 6.18945H16.5508L15.9258 19.7734C15.9062 20.3594 15.5449 20.7305 14.998 20.7305H6.50195ZM7.88867 19.2266C8.32812 19.2266 8.61133 18.9336 8.60156 18.5234L8.30859 8.45508C8.29883 8.03516 8.00586 7.76172 7.58594 7.76172C7.14648 7.76172 6.86328 8.04492 6.87305 8.45508L7.16602 18.5332C7.17578 18.9531 7.46875 19.2266 7.88867 19.2266ZM10.7598 19.2266C11.1895 19.2266 11.4824 18.9434 11.4824 18.5332V8.45508C11.4824 8.03516 11.1895 7.76172 10.7598 7.76172C10.3203 7.76172 10.0273 8.03516 10.0273 8.45508V18.5332C10.0273 18.9434 10.3203 19.2266 10.7598 19.2266ZM13.6211 19.2266C14.041 19.2266 14.334 18.9531 14.3438 18.5332L14.6367 8.45508C14.6465 8.04492 14.3633 7.76172 13.9238 7.76172C13.5039 7.76172 13.2109 8.03516 13.2012 8.45508L12.9082 18.5234C12.8984 18.9434 13.1816 19.2266 13.6211 19.2266Z"
              fill="red"/>
        </svg>

      </div>
      <h1 v-if="!renderCheck">
        Создать преподавателя
      </h1>
      <div class="categories" v-if="renderCheck">
        <div class="category background" v-for="category in arrCategories" :key="category">
          <p class="categoryText">
            {{ category }}
          </p>
        </div>
      </div>
    </div>
    <div class="lastName">
      <Input type-obj="lastname" :read-only-props="readOnlyCheck" :text-content="lastName"/>
    </div>
    <div class="nameAndPatronymic">
      <div class="input_first">
        <Input type-obj="name" :read-only-props="readOnlyCheck" :text-content="name"/>
      </div>
      <div class="input_second">
        <Input type-obj="patronymic" :read-only-props="readOnlyCheck" :text-content="patronymic"/>
      </div>
    </div>
    <div class="email">
      <Input type-obj="email" :read-only-props="readOnlyCheck" :text-content="email"/>
    </div>
    <div class="phone">
      <Input type-obj="phone" :read-only-props="readOnlyCheck" :text-content="phone"/>
    </div>
    <button class="save" @click="save"> Сохранить</button>
  </div>
</template>

<script>
import Input from "@/components/Input";
import {hex2rgb} from "@/store/helper/helperFunction";


export default {
  name: "CreateTeacher",
  components: {Input},
  data() {
    return {
      nameAndFull: "Маятин Александр Владимирович",
      arrCategories: ["Операционные системы", "Заслуженный блюзмен ИТМО 2021", "Отец реп игры в ИТМО"],
      name: "Александр",
      lastName: "Маятин",
      patronymic: "Владимирович",
      phone: "88005553535",
      email: "bestItmoTeacher@ifmo.ru",
    }
  },
  methods: {
    save() {
      document.querySelectorAll('input').forEach(item => item.readOnly = true);
    },
  },
  mounted() {
    const arrayOut = ["#646FCE", "#25BD74", "#2543AD"];
    const allCategories = document.querySelectorAll('.background');
    allCategories.forEach((item, index) => {
      const rgb = hex2rgb(arrayOut[index % allCategories.length])
      item.style.backgroundColor = `rgba(${rgb.r},${rgb.g},${rgb.b},0.2)`;
      item.style.color = arrayOut[index % allCategories.length];
    });
  },
  computed: {
    readOnlyCheck: function () {
      return JSON.parse(localStorage.getItem("isThere")) ? "true" : "false"
    },
    renderCheck: function () {
      return JSON.parse(localStorage.getItem('isThere'));
    }
  },
}

</script>

<style lang="scss">
@import "src/assets/styles/components/MainPage";
@import "src/assets/styles/components/CreateTeacher";
@import "src/assets/styles/components/ButtonToAuth";

p {
  margin: 0;
}

h1 {
  font-size: 2em;
}

.headInput {
  font-size: 1em !important;
}

.createTeacher {
  input {
    padding: 1em 2em;
    font-size: 1.1em;
  }
}

.lastName {
  h3 {
    margin-bottom: 0.5em;
  }

  input {
    width: 43em;
  }
}

.headerTeacher {
  margin-bottom: 4em;
}

.headerTeacher {
  h1 {
    margin-bottom: 0;
  }
}

.nameAndPatronymic {
  display: flex;
  margin-top: 1em;
  margin-bottom: 2em;

  .input_first {
    width: 26em;

    input {
      width: 100%;
    }
  }

  .input_second {
    width: 20em;

    input {
      width: 100%;
    }
  }

  width: 47.2em;
}

.email {
  h3 {
    margin-bottom: 0.5em;
  }

  input {
    width: 43em !important;
  }

  margin-bottom: 1.5em;
}

.phone {
  h3 {
    margin-bottom: 0.5em;
  }

  input {
    width: 43em;
  }
}

.save {
  margin: 8em 0 0;
  padding: 1em 6rem;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  width: 60em;
  margin-top: 1.2em;
}

.category {
  border-radius: 3em;
  margin-bottom: 1em;
  margin-right: 1.2em;
}

.categoryText {
  font-size: 1em;
  font-weight: 700;
  padding: 0.3em 1em;
}

.withName {
  display: flex;
  align-items: flex-end;

  svg {
    cursor: pointer;
    margin-left: 1.66em;
    width: 4em;
    height: 3.6em;
    padding: 0.8em 1em;
    color: red;
  }
}

svg:hover {
  background-color: #DF1717;
  border-radius: 0.3em;

  path {
    fill: white;
  }
}
</style>