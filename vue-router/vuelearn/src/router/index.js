import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 
import Look from '@/components/Look'
import  LookOne from '@/components/LookOne'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    path: '/look/:id',
    name: 'Look',
    component: Look,
    children: [{
    path: '/',
    name: 'LookOne',
    component: LookOne,
    }
    ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
