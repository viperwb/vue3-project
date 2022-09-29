import {createRouter, createWebHashHistory} from "vue-router";

const  routes = [
    {
        path: "/",
        component: () => import("../views/StockPage.vue")
    },
    {
        path: "/stockpage",
        component: () => import("../views/StockPage.vue")
    },
    /* {
        path: "/404",
        component: () => import("../views/ErrorPage.vue")
    }, */
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    },
]


const router=createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;