<template>
  <div>
    <!-- <container style="float:large"> -->
      <button v-on:click="movePage('Postdiscountinfo')">할인정보 게시</button>
    <!-- </container> -->
    <!-- <container style="float:left"> -->
      <button v-on:click="movePage('Productorder')">상품 발주</button>
    <!-- </container> -->
    <!-- <container style="float:left"> -->
      <button v-on:click="movePage('Salescheck')">매출조회</button>
    <!-- </container> -->
    <!-- <container style="float:left"> -->
      <button v-on:click="movePage('Stockcheck')">재고조회</button>
    <!-- </container> -->
    <!-- <container style="float:right"> -->
      <button v-on:click="movePage('Stockmodify')">재고관리</button>
    <!-- </container> -->
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'AdminPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    movePage(page){
      router.push({path:"/" + page})
    }
  }
}
</script>
<style scoped>
button {
  width: 20%;
  height: 500px;
  box-sizing: border-box;
  float: left;
}
</style>
