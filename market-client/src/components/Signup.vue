<template>
  <div>
    <form>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>생년월일</th>
            <th>주소</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input v-model="name"></input></td>
            <td><input v-model="birthday"></input></td>
            <td><input v-model="address"></input></td>
            <td><input v-model="phoneNumber"></input></td>
          </tr>
        </tbody>
      </table>
    </form>
    <div>
      <button v-on:click="submit(name, birthday, address, phoneNumber)">가입</button>
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
