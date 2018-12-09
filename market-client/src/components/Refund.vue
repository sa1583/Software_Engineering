<template>
  <div>
    <table class="table" id="tables">
      <thead>
        <tr>
          <td class="c1">회원 전화번호</td>
          <td class="c2">총 가격</th>
          <td class="c3">마일리지</td>
          <td class="c4">결제수단</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="c1">01022141583</td>
          <td class="c2">13000</td>
          <td class="c3">0</td>
          <td class="c4">카드</td>
        </tr>
      </tbody>
    </table>
    <table class="table" id="tables">
      <thead>
        <tr>
          <td class="c1">물품 명</td>
          <td class="c2">가격</td>
          <td class="c3">개수</td>
          <td class="c4">총가격</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in orders">
          <td class="c1">{{ i['name'] }}</td>
          <td class="c2">{{ i['price'] }}</td>
          <td class="c3">{{ i['count'] }}</td>
          <td class="c4">{{ i['total'] }}</td>
        </tr>
      </tbody>
    </table>


    <div id="rb">
      <button v-on:click="refund($route.params.method)">환불</button>
    </div>
  </div>
</template>
<script>

import router from '../router'
export default {
  name: 'Refund',
  data () {
    return {
      orders: [
        {name:'큐커피', price:3500, count:2, total:7000},
        {name:'드드득커피', price:2000, count:3, total:6000}
      ]
    }
  },
  methods:{
      refund(method){
        alert("환불 완료!")
        router.push({path:"/"})
      }
  }
}
</script>
<style scoped>
button  {
  width : 10%
}
#rb {
  text-align: center;
}
#tables {
  text-align: center;
}
.c1 {
  width: 30%;
}
.c2 {
  width: 30%;
}
.c3 {
  width: 20%;
}
.c4 {
  width: 20%;
}
</style>
