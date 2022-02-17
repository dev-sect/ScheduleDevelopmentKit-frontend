import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Settings from "@/pages/Settings";
import Auth from "@/pages/Auth";
import CreateTeacher from "@/pages/CreateTeacher";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: {
            name: 'Главная'
        },
        children: [
            {
                path: '/createTeacher',
                name: 'createTeacher',
                component: CreateTeacher,
                meta: {
                    name: 'Создать преподавателя'
                }
            },
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
            name: "Настройки"
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router