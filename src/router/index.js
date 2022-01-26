import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Settings from "@/pages/Settings";
import TeacherCard from "@/components/TeacherCard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: Main,
        meta: {
          name: 'Главная'
        },
    },

    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
            name: "Настройки"
        }
    },
    {
        path: '*',
        name: 'allUnnamed',
        redirect: Main
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router