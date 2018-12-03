import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Buy from '@/components/Buy'

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
    }
  ]
})