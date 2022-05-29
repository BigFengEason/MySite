// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Photo from '@/pages/Photo'
import Other from '@/pages/Other'

import Mine from '@/pages/About/Mine'
import Index from '@/pages/About/Index/index.vue'
import Guan from '@/pages/About/Guan'
import Phone from '@/pages/About/Phone'
import Email from '@/pages/About/Email'
import Wechat from '@/pages/About/Wechat'
import More from '@/pages/About/More'

// 配置路由
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                scroll: true,
                title: 'HOME'
            }
        },
        {
            path: '/about',
            component: About,

            meta: {
                scroll: true,
                title: "ABOUT"
            },
            children: [
                {
                    path: 'mine',
                    component: Mine,
                    meta: {
                        scroll: true,
                        title: "ABOUT"
                    },
                },
                {
                    path: 'index',
                    component: Index,
                    meta: {
                        scroll: false,
                        title: "ABOUT"
                    },
                },
                {
                    path: 'guan',
                    component: Guan,
                    meta: {
                        scroll: false,
                        title: "ABOUT"
                    },
                },
                {
                    path: 'phone',
                    component: Phone,
                    meta: {
                        scroll: false,
                        title: "ABOUT"
                    },
                },
                {
                    path: 'email',
                    component: Email,
                    meta: {
                        scroll: false,
                        title: "ABOUT"
                    },
                },
                {
                    path: 'wechat',
                    component: Wechat,
                    meta: {
                        scroll: false,
                        title: "ABOUT"
                    },
                },
                {
                    path: 'more',
                    component: More,
                    meta: {
                        scroll: false,
                        title: "ABOUT"
                    },
                },

            ],
            redirect: '/about/mine',
        },
        {
            path: '/blog',
            component: Blog,
            meta: {
                scroll: true,
                title: "BLOG"
            },
        },
        {
            path: '/photo',
            component: Photo,
            meta: {
                scroll: true,
                title: "PHOTO"
            },
        },
        {
            path: '/other',
            component: Other,
            meta: {
                scroll: true,
                title: "OTHER"
            }
        },
        {
            path: '/',       //重定向，项目跑起来时访问/，立刻定向到home
            redirect: '/home'
        }

    ],

})
// 全局前置路由守卫：用于控制哪些路由跳转需要将网页返回顶部
router.beforeEach((to, from, next) => {
    if (to.meta.scroll) {
        // chrome
        document.body.scrollTop = 0
        // firefox
        document.documentElement.scrollTop = 0
        // safari
        window.pageYOffset = 0
        next()
    } else {
        next()
    }
})

// 全局后置路由守卫：用于切换网页title
router.afterEach((to, from) => {
    document.title = to.meta.title
})

export default router