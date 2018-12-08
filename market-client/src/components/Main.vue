<template>
  <div>
    <v-container style="width:60%; float:left">
      <v-btn class="short" v-on:click="movePage('SellectMemeberOrNot/buy')">구매</v-btn>
      <v-btn class="short" v-on:click="movePage('SellectMemeberOrNot/refund')">환불</v-btn><br>
      <v-btn class="long" v-on:click="movePage('CheckMileage')">마일리지 확인</v-btn><br>
      <v-btn class="long" v-on:click="movePage('Signup')">회원가입</v-btn><br>
      <v-btn class="long" v-on:click="movePage('LoginAdmin')">관리자 로그인</v-btn><br>
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
    width:42.5%;
  }
  button.long{
    width:90%;
  }
</style>
