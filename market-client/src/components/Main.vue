<template>
  <div>
    <container style="width:60%; float:left">
      <button class="short" v-on:click="movePage('SellectBuynRefund')">구매</button>
      <button class="short" v-on:click="movePage('SellectBuynRefund')">환불</button><br>
      <button class="long" v-on:click="movePage('CheckMileage')">마일리지 확인</button><br>
      <button class="long" v-on:click="movePage('Signup')">회원가입</button><br>
      <button class="long" v-on:click="movePage('LoginAdmin')">관리자 로그인</button><br>
    </container>
    <container style="width:40%; float:right">
      <table>
        <thead>
          <tr>
            <td>
              할인 정보
            </td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </container>
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
      router.push({name:page})
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
