// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import Vuex from "vuex"
import  { AlertPlugin } from 'vux'
import VueI18n from 'vue-i18n'
import messages from "@/i18n"
Vue.use(VueI18n)
Vue.use (AlertPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false


//配置国际化

// console.log(VueI18n)
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zn', // set locale
  messages, // set locale messages
})

// const vuxLocales = require('json!yaml!vux/src/locales/all.yml')
// const componentsLocales = require('json!yaml!src/locales/components.yml')
// const globalLocales = require('json!yaml!src/locales/global_locales.yml') || {"en": {}, 'zh': {}}

// const finalLocales = {
//   'en': objectAssign(vuxLocales['en'], componentsLocales['en'], globalLocales['en']),
//   'zh': objectAssign(vuxLocales['zh'], componentsLocales['zh'], globalLocales['zh'])
// }

// for (let i in finalLocales) {
//   Vue.i18n.add(i, finalLocales[i])
// }
// Vue.i18n.set('zh')

//loading 的配置
const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
        state: {
            isLoading: false
        },
        mutations: {
            updateLoadingStatus(state, payload) {
                console.log(payload);
                state.isLoading = payload.isLoading
            }
        }
    })
    //用store控制状态值来控制加载时。。。
router.beforeEach(function(to, from, next) {
    store.commit('updateLoadingStatus', { isLoading: true })
    next()
})

router.afterEach(function(to) {
    setTimeout(() => {
        store.commit('updateLoadingStatus', { isLoading: false })
    }, 100)
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app-box')
