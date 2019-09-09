import Vue from 'vue'
import App from './App'
import store from './store/index'
import interfaces from './utils/interfaces'
import https from './utils/https'


Vue.config.productionTip = false
App.mpType = 'app'

//把vuex仓库挂载到Vue原型上
Vue.prototype.$store = store;
Vue.prototype.$interfaces = interfaces;
Vue.prototype.$https = https;



const app = new Vue(App)
app.$mount()


