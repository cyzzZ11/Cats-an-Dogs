import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入组件
import Home from '../views/Home'
import Seacher from '@/views/Search'
import Register from '../views/Register'
import Login from '../views/Login'


export default new VueRouter({
    routes: [
        {
            path:"/home",
            component:Home
        },
        {
            path:"/seacher",
            component:Seacher
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})