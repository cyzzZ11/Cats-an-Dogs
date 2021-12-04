import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入组件
import Home from '../views/Home'
import Search from '@/views/Search'
import Register from '../views/Register'
import Login from '../views/Login'

let originPush =VueRouter.prototype.push
VueRouter.prototype.push = function(location,res,rej){
    if(res && rej){
        originPush.call(this,arguments)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
let originReplace =VueRouter.prototype.replace
VueRouter.prototype.replace = function(location,res,rej){
    if(res && rej){
        originReplace.call(this,arguments)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {   
            name:"search",
            path: "/search",
            component: Search,
            meta: { show: true }
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})