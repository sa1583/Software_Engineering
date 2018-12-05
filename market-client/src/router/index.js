import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Buy from '@/components/Buy'
import salescheck from '@/components/Salescheck'
import stockcheck from '@/components/Stockcheck'
import stockmodify from '@/components/Stockmodify'
import productorder from '@/components/Productorder'
import postdiscountinfo from '@/components/Postdiscountinfo'



Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/salescheck',
      name: 'salescheck',
      component: salescheck
    },
    {
      path: '/stockcheck',
      name: 'stockcheck',
      component: stockcheck
    },
    {
      path: '/stockmodify',
      name: 'stockmodify',
      component: stockmodify
    },
    {
      path: '/productorder',
      name: 'productorder',
      component: productorder
    },
    {
      path: '/postdiscountinfo',
      name: 'postdiscountinfo',
      component: postdiscountinfo
    }
  ],
  mode: 'history'
})