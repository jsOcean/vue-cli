import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '../view/index/index' 
import manage from '../view/manage/manage'
import values from '../view/manage/values'


import parchild from '../view/manage/parchild'
import log from '../view/manage/log'
import reg from '../view/manage/reg'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
    	path:'/',
    	name:'index',
    	component:index
    },
    {
      path:'/manage',
      name:'manage',
      component:manage
    },
    {
      path:'/values/:id/:ids',
      name:'values',
      component:values
    },
    {
      path:'/parchild',
      name:'parchild',
      component:parchild,
      children:[
        {
          path:'log/:id',
          component:log
        },{
          path:'reg',
          component:reg
        }
      ]
    }
  ]
})
