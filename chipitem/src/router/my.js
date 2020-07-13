export default [
    {
        path: '/my',
        component: () => import("../views/my.vue")
    },
    {
        path: '/login',
        component: () => import("../components/my/login.vue")
    },
    {
        path: '/register',
        component: () => import("../components/my/register.vue")
    },
    {
        path: '/collection',
        name: '我的收藏',
        component: () => import("../components/my/collection.vue")
    }
]