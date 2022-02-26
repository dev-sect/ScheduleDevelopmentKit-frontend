import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Settings from "@/pages/Settings";
import Auth from "@/pages/Auth";
import CreateTeacher from "@/pages/CreateTeacher";
import TypeCards from "@/store/modules/quickActions";

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
                path: TypeCards['TEACHERS'].data.path,
                name: 'Teachers',
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