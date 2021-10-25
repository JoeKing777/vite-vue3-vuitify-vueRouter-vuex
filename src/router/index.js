import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        redirect: 'Home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dash',
        name: 'Dashboard',
        component: HelloWorld,
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router