import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Settings from "@/pages/Settings";
import PagesLayout from "@/components/PagesLayout";
import Auth from "@/pages/Auth";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: PagesLayout,
        redirect: '/main',
        children:[
            {
                path: '/main',
                name: 'main',
                component: Main,
            },
            {
                path: '/settings',
                name: 'settings',
                component: Settings,
            }
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router