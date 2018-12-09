<template>
  <div>
    <td><v-text-field v-model="name" label="이름"></v-text-field></td>
    <td><v-text-field v-model="birthday" label="생년월일"></v-text-field></td>
    <td><v-text-field v-model="address" label = "주소"></v-text-field></td>
    <td><v-text-field v-model="phoneNumber" label = "전화번호"></v-text-field></td>
    <div>
      <v-btn v-on:click="submit(name, birthday, address, phoneNumber)">가입</v-btn>
    </div>
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
    submit(nm, bd, ad, pn){
      if(nm && bd && ad && pn){
        this.$http.get('/api/signup',{
          params: {
            name: nm,
            birthday: bd,
            address: ad,
            phoneNumber: pn
          }
        }).then((response) => {
          if(response.data){
            alert("가입되었습니다!")
            router.push({path:"/"})
          }
          else{
            alert("이미 가입된 사용자 입니다!")
          }
        })
      }
      else{
        alert("입력 내용을 확인해 주세요")
      }
    }
  }
}
</script>

<style>
</style>
