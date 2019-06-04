import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Main from '@/components/Main'
import MainDetail from '@/components/MainDetail' 
import UserList  from  '@/components/UserList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    { 
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/main/userList',
          name: 'MainDetail',
          component: MainDetail,
        },
        {
          path: '/',
          name: 'UserList',
          component: UserList,
        }
      ]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
