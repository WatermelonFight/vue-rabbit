import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/Layout/components/CartList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      // 不能加s
      component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          // :为占位符
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'/detail/:id',
          component:Detail
        },
        {
          path:'/cartlist',
          component:CartList
        }
      ]
    },
    {
      path:'/login',
      component:Login,
    }
  ],
  //切换路由时，控制页面位置
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
