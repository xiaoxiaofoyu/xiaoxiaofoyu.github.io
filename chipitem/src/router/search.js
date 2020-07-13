export default {
    path: '/search',
    name: '搜索页',
    component: () => import("../views/search.vue"),
    children: [
        {
            path: 'hot',
            name: '热门',
            component: () => import('../components/searches/hot.vue')
        },
        {
            path: 'periphery',
            name: '周边',
            component: () => import('../components/searches/periphery.vue')
        },
        {
            path: 'domestic',
            name: '境内',
            component: () => import('../components/searches/domestic.vue')
        },
        {
            path: 'hkmt',
            name: '中国港澳台',
            component: () => import('../components/searches/hkmt.vue')
        },
        {
            path: 'japan',
            name: '日本',
            component: () => import('../components/searches/japan.vue')
        },
        {
            path: 'southasia',
            name: '东南亚',
            component: () => import('../components/searches/southasia.vue')
        },
        {
            path: 'europe',
            name: '欧洲',
            component: () => import('../components/searches/europe.vue')
        },
        {
            path: 'america',
            name: '美洲',
            component: () => import('../components/searches/america.vue')
        },
        {
            path: 'amea',
            name: '澳中东非',
            component: () => import('../components/searches/amea.vue')
        },
        {
            path: 'visaexemption',
            name: '免签',
            component: () => import('../components/searches/visaexemption.vue')
        },
        {
            path: 'visavonarrival',
            name: '落地签',
            component: () => import('../components/searches/visavonarrival.vue')
        }
    ]
}
