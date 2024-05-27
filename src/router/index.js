import {createRouter, createWebHistory} from 'vue-router'

// 路由懒加载
const HomeView = () => import('../views/home/HomeView.vue')
const NotFoundView = () => import('../views/404View.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {requiresAuth: true} // 添加 meta 字段指示需要身份验证
        },
        // 匹配所有路径的路由，用于显示 404 页面
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
