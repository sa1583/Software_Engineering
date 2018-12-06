<template>
  <div>
    <input v-model="pnumber" placeholder="전화번호를 입력하세요">
    <button v-on:click="movePage($route.params.method)">확인</button>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'InputMemNum',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    movePage(method){
      var member = "1"
      if(method === "buy"){
        router.push({path:"/Payment/" + member})
      }
      else{
        router.push({path:"/Refund/" + member})
      }
    }
  }
}
</script>
