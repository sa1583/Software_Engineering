<template>
  <div>
    <v-btn v-on:click="movePage($route.params.method, true)">회원</v-btn>
    <v-btn v-on:click="movePage($route.params.method, false)">비회원</v-btn>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'SellectMemeberOrNot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    movePage(method, isMember){
      if(method === "buy"){
        if(isMember){
          router.push({path:"/InputMemNum/buy"})
        }
        else{
          router.push({path:"/Payment/non"})
        }
      }
      else{
        if(isMember){
          router.push({path:"/InputMemNum/refund"})
        }
        else{
          router.push({path:"/InputReceipt/non"})
        }
      }
    }
  }
}
</script>
<style>
</style>
