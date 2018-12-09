<template>
  <div>
    <v-container style="width:40%; float:left">
      <v-btn class="short" v-on:click="movePage('SellectMemeberOrNot/buy')">구매</v-btn>
      <v-btn class="short" v-on:click="movePage('SellectMemeberOrNot/refund')">환불</v-btn><br>
      <v-btn class="long" v-on:click="movePage('CheckMileage')">마일리지 확인</v-btn><br>
      <v-btn class="long" v-on:click="movePage('Signup')">회원가입</v-btn><br>
      <v-btn class="long" v-on:click="movePage('LoginAdmin')">관리자 로그인</v-btn><br>
    </v-container>
    <v-container style="width:60%; float:right">
      <v-data-table
      :headers="headers"
      :items="discountinfo"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.product }}</td>
        <td class="text-xs-center">{{ props.item.startDate }}</td>
        <td class="text-xs-center">{{ props.item.endDate }}</td>
        <td class="text-xs-center">{{ props.item.discountRate }}</td>
      </template>
    </v-data-table>
    </v-container>



  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'Main',
  data () {
    return {
      headers: [
          {
            text: '상품',
            align: 'center',
            sortable: false,
            value: 'product'
          },
          {
            text: '시작일',
            align: 'center',
            sortable: false,
            value: 'startDate'
          },
          {
            text: '마감일',
            align: 'center',
            sortable: false,
            value: 'endDate'
          },
          {
            text: '할인율',
            align: 'center',
            sortable: false,
            value: 'rate'
          },
        ],
      msg: 'Welcome to Your Vue.js App',
      discountinfo:[]
    }
  },
  methods:{
    movePage(page){
      router.push({path:page})
    }
  },
  created(){
      this.$http.get('/api/getAllDiscountInfo').then((response) => {
        this.discountinfo = response.data
      })
    }
}
</script>

<style>
  button.short{
    width:42.5%;
  }
  button.long{
    width:90%;
  }
</style>
