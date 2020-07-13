export default [
    {
        path: '/guidepage',
        name: '引导页',
        component: ()=>import("../components/publics/guidepage.vue"),
        beforeEnter(to, from, next){
            if( localStorage.isNewUser){
                next('/adpage');
            }else {
                localStorage.isNewUser = true;
                next();
            }
        }
    },
    {
        path: '/adpage',
        name: '广告页',
        component: ()=>import("../components/publics/adpage.vue")
    },
    {
        path: '/unavailable',
        name: '无法使用此功能',
        component: ()=>import("../components/publics/unavailable.vue")
    },
    {
        path: '/recommend',
        name: '推荐',
        component: ()=>import("../components/publics/recommend.vue")
    }
]