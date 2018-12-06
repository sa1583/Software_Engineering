import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import salescheck from '@/components/Salescheck'
import stockcheck from '@/components/Stockcheck'
import stockmodify from '@/components/Stockmodify'
import productorder from '@/components/Productorder'
import postdiscountinfo from '@/components/Postdiscountinfo'
import SellectMemeberOrNot from '@/components/SellectMemeberOrNot'
import LoginAdmin from '@/components/LoginAdmin'
import CheckMileage from '@/components/CheckMileage'
import Signup from '@/components/Signup'
import AdminPage from '@/components/AdminPage'
import Payment from '@/components/Payment'
import InputMemNum from '@/components/InputMemNum'
import Refund from '@/components/Refund'
import InputReceipt from '@/components/InputReceipt'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Main
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
    },
    {
      path: '/SellectMemeberOrNot/:method',
      name: 'SellectMemeberOrNot',
      component: SellectMemeberOrNot
    },
    {
      path: '/CheckMileage',
      name: 'CheckMileage',
      component: CheckMileage
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/LoginAdmin',
      name: 'LoginAdmin',
      component: LoginAdmin
    }, {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage
    }, {
      path: '/InputMemNum/:method',
      name: 'InputMemNum',
      component: InputMemNum
    }, {
      path: '/Payment/:who',
      name: 'Payment',
      component: Payment
    }, {
      path: '/Refund/:who/:id',
      name: 'Refund',
      component: Refund
    }, {
      path: '/InputReceipt/:who',
      name: 'InputReceipt',
      component: InputReceipt
    }
  ],
  mode: 'history'
})