<template>
  <div>
    <table class="table" id="w6">
      <thead>
        <tr>
          <th class="c1">회원 전화번호</th>
          <th class="c2">총 가격</th>
          <th class="c3">보유 마일리지</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="c1">0000</td>
          <td class="c2">13000</td>
          <td class="c3">0</td>
        </tr>
      </tbody>
    </table>
    <form id="w4">
      <input type="radio" id="one" value="card" v-model="picked">
      <label for="one" id="mg">카드결제</label>

      <input type="radio" id="two" value="cash" v-model="picked">
      <label for="two">현금결제</label>

      <input v-model="mileage" placeholder="사용할 마일리지">
      <br>
      <button v-on:click="pay($route.params.method)">결제</button>
    </form>
    <table class="table" id="pl">
      <thead>
        <tr>
          <th class="c1">물품 명</th>
          <th class="c2">가격</th>
          <th class="c3">개수</th>
          <th class="c4">총가격</th>
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




  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'Payment',
  data () {
    return {
      picked : "",
      orders: [
        {name:'큐커피', price:3500, count:2, total:7000},
        {name:'드드득커피', price:2000, count:3, total:6000}
      ]
    }
  },
  methods:{
      pay(method){
        alert("구매 완료!")
        router.push({path:"/"})
      }
  }
}
</script>
<style scoped>
button  {
  width : 20%
}
th {
  text-align: center;
}
#w6 {
  width : 60%;
  box-sizing: border-box;
  float: left;
  height: 100px;
  text-align: center;
}
#pl {
  text-align: center;
}

#w4 {
  width : 30%;
  box-sizing: border-box;
  float: right;
  height: 100px;
  padding: 10px;
  border: 1px solid black;
  margin: 15px;
  box-shadow: 5px 5px 10px 1px lightgray;
  text-align: center;
}
#mg {
  margin-right: 20px;
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
