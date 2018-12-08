<template>
  <div>
    비밀번호 입력:
    <v-text-field v-model="password">
    </v-text-field>
    <v-btn v-on:click="movePage('AdminPage')">로그인</v-btn>
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
      this.$http.get('/api/login',{
        params: {
          password: this.password
        }
      }).then((response) => {
        if(response.data){
          router.push({path:page})
        }
        else{
            alert("잘못된 패스워드!")
        }
      })
    }
  }
}
</script>

<style>
</style>
