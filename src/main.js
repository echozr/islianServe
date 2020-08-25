import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import api from './api' // 导入api接口
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = api // 将api挂载到vue的原型上
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
