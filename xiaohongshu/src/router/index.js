import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Zhu from '@/components/Zhu'
import Main from '@/components/main'
import Detail from '@/components/detail'
import Mine from '@/components/page/mine'
import Store from '@/components/page/store'
import Fen from '@/components/page/fen'
import Message from '@/components/page/message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/zhu',
      name: 'Zhu',
      component: Zhu
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/main/store',
          name: 'Store',
          component: Store
        },
        {
          path: '/main/fen',
          name: 'Fen',
          component: Fen
        },
        {
          path: '/main/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/main/mine',
          name: 'Mine',
          component: Mine
        }
      ]
    },
  ]
})
