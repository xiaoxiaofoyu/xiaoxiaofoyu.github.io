export default {
    path:"/user",
    name:"个人页",
    component: ()=>import("../views/user.vue"),
    // beforeEnter(to, from, next){
    //     if(sessionStorage.loginFlag){
    //         next('/user');
    //     }else {
    //         next('/');
    //     }
    // }
}