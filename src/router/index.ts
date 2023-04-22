import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Poker from '@/views/Poker.vue'

const routes: Array<RouteRecordRaw> = [
    
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '',
        },
    },
    {
        path: '/poker',
        name: 'poker',
        component: Poker,
        meta: {
            title: '',
        },
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
