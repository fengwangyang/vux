import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import { AjaxPlugin } from 'vux'

Vue.use(AjaxPlugin)//AjaxPlugin 插件依赖于 axios，需要注意的是axios是基于Promise的，因此如果你需要兼容低版本浏览器(caniuse)，需要引入polyfill。
Vue.use(Vuex)
Vue.use(Router)

const router = new Router({
            routes: [{
                path: '/',
                component: (resolve) => {require(['@/components/HelloFromVux'], resolve)}
                },
                {
                path: '/helloWorld',
                name: 'HelloWorld',
                component: (resolve) => {require(['@/components/HelloWorld'], resolve)}
                }]
            })


            // main.js 里，如果你使用了 vue-router
                router.afterEach(function(to) {
                if (window.ga) {
                    window.ga('set', 'page', to.fullPath) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
                    window.ga('send', 'pageview')
                }
            })


            export default router
