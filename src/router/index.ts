import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/:catchAll(.*)',
        redirect: '/home',
    },
    { path: '/home', component: () => import('../views/home.vue'), name: 'Home' },
    { path: '/ssfn', component: () => import('../views/ssfn/index.vue'), name: 'ssfn' },
    { path: '/steamCodeConvert', component: () => import('../views/steamCodeConvert/index.vue'), name: 'steam Code Convert' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;