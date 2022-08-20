import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../views/home.vue') },
    { path: '/ssfn', component: () => import('../views/ssfn/ssfn.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;