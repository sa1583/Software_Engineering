<template>
  <div>
    <button v-on:click="movePage('SellectBuynRefund')">회원</button>
    <button v-on:click="movePage('SellectBuynRefund')">비회원</button>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'SellectBuynRefund',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    movePage(page){
      router.push({name:page})
    }
  }
}
</script>
<style>
</style>
