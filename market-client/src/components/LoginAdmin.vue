<template>
  <div>
    비밀번호 입력:
    <input></input>
    <button v-on:click="movePage('AdminPage')">로그인</button>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'LoginAdmin',
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
</style>
