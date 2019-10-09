import Vue from 'vue'
import App from './App.vue'

import Vueresourde from 'vue-resource'

//1'创建组件
import Home from "./components/Home.vue"
import News from "./components/News.vue"
import Content from "./components/Content.vue"
import Pcontent from "./components/Pcontent.vue"


//引入公共css
// import "./assets/css/basic.scss";


//引入路由
import VueRouter from 'vue-router'

//使用vue-resource
Vue.use(Vueresourde);

//使用router
Vue.use(VueRouter)



//2\配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/content/:aid', component: Content },
  { path: '/pcontent', component: Pcontent }, //get传值

  

  { path: '/*', redirect: '/home' } //默认展示
]


//// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



//4\挂载路由


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
