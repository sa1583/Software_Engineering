import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
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
      name: 'Main',
      component: Main
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
      path: '/SellectMemeberOrNot/InputMemNum/:method',
      name: 'InputMemNum',
      component: InputMemNum
    }, {
      path: '/SellectMemeberOrNot/Payment/:who',
      name: 'Payment',
      component: Payment
    }, {
      path: '/SellectMemeberOrNot/Refund/:who',
      name: 'Refund',
      component: Refund
    }, {
      path: '/SellectMemeberOrNot/InputReceipt/:who',
      name: 'InputReceipt',
      component: InputReceipt
    }
  ]
})