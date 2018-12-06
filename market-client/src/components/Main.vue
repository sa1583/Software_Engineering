<template>
  <div>
    <v-container style="width:60%; float:left">
      <button class="short" v-on:click="movePage('SellectMemeberOrNot/buy')">구매</button>
      <button class="short" v-on:click="movePage('SellectMemeberOrNot/refund')">환불</button><br>
      <button class="long" v-on:click="movePage('CheckMileage')">마일리지 확인</button><br>
      <button class="long" v-on:click="movePage('Signup')">회원가입</button><br>
      <button class="long" v-on:click="movePage('LoginAdmin')">관리자 로그인</button><br>
    </v-container>
    <v-container style="width:40%; float:right">
      <v-card-title>
        할인정보
        <v-spacer></v-spacer>
      </v-card-title>
    </v-container>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    movePage(page){
      router.push({path:page})
    }
  }
}
</script>

<style>
  button.short{
    width:45%;
  }
  button.long{
    width:90.5%;
  }
</style>
