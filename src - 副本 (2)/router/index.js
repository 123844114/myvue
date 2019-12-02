/*
 * @Author: your name
 * @Date: 2019-11-21 17:05:19
 * @LastEditTime: 2019-11-22 11:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editm
 * @FilePath: \myvue\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: () => import('../view/Home')
        },
        {
            path: '/layout',
            component: () => import('../view/Layout'),
            // beforeEnter(to, from, next){
            //     if(localStorage.user){
            //         next()
            //     }else{
            //         next('/login')
            //     }
            // },
            // redirect: '/layout/question/0',
            children: [
                {
                    path: 'question/:index',
                    component: () => import('../view/layout/Question'),
                    meta: { required: true }
                },
                {
                    path: 'end',
                    component: () => import('../view/layout/End'),
                    meta: { required: true }
                }
            ]
        },
        {
            path: '/login',
            component: () => import('../view/Login')
        },
        {
            path: '*', //找不到，配最后
            component: () => import('../view/404')
        }
    ]
})

//全局
router.beforeEach((to,from,next)=>{
    // 判断
    if(to.meta.required){
        //需要校验
        if(localStorage.user){
            next()
        }else{
            next({path:'/login',query:{fp:to.path}})
        }
    }else{
        next()
    }
})

export default router