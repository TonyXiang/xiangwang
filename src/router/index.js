import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: () => import('../view/home/home.vue') },
    { path: '/hello', component: () => import('../view/hello/hello.vue') }
  ]
})

export default router
