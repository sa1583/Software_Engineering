<template>
  <div>
    비밀번호 입력:
    <input v-model="password"></input>
    <button v-on:click="movePage('AdminPage', password)">로그인</button>
  </div>
</template>
<script>
import router from '../router'
import admin from '../classes/Administrator.js'
export default {
  name: 'LoginAdmin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    movePage(page, password){
      if(admin.loginAdmin(password)){
        router.push({path:page})
      }
      else {
        alert("잘못된 패스워드!")
      }
    }
  }
}
</script>

<style>
</style>
