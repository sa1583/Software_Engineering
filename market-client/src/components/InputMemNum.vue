<template>
  <div>
    <v-text-field v-model="pnumber" placeholder="전화번호를 입력하세요"></v-text-field>
    <v-btn v-on:click="movePage($route.params.method, pnumber)">확인</v-btn>
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
    movePage(method, number){
      if(number){
        this.$http.get('/api/getMemberByPhonenumber/'+number).then((response) => {
          var member = response.data
          if(member){
            if(method === "buy"){
              router.push({path:"/Payment/"+number})
            }
            else{
              router.push({path:"/InputReceipt/"+number})
            }
          }
          else{
            alert("등록되지 않은 전화번호 입니다.")
          }

        })
      }
      else{
        alert("전화번호를 입력해 주세요")
      }
    }
  }
}
</script>
