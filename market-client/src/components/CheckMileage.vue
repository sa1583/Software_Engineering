<template>
  <div>
    <div>
      <form>
        <input v-model="pnum"></input>
        <button v-on:click="search(pnum)">검색</button><br>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
      <table>
        <thead>
          <tr>
            <th>마일리지 변화량</th>
            <th>내용</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="it in item">
            <td>{{it.deltaMileage}}</td>
            <td>{{it.tradeDatetime}}</td>
            <td>{{it.payment}}</td>
          </tr>
        </tbody>
      </table>
    <div>
    </div>
  </div>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'SellectBuynRefund',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      item: []
    }
  },
  methods:{
    search(pn){
      if(pn){
        this.$http.get('/api/searchMileage',{
          params: {
            phoneNumber: pn
          }
        }).then((response) => {
          if(response.data){
            this.item = response.data
          }
          else{
            alert("거래 내역이 없습니다.")
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

<style>
</style>
