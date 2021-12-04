import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 三级联动组件
import TypeNav from './components/TypeNav'
// 第一个参数 全局组件的名字，第二个 哪一个组件
Vue.component(TypeNav.name, TypeNav)
// 引入仓库
import store from './store'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
