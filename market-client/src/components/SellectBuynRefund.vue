<template>
  <div>
    <v-btn v-on:click="movePage('SellectBuynRefund')">회원</v-btn>
    <v-btn v-on:click="movePage('SellectBuynRefund')">비회원</v-btn>
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
