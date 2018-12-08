<template>
  <div>
    <div>
      <form>
        <v-layout row>
          <v-flex xs12>
            <v-text-field 
            label="전화번호"
            v-model ="pnum" 
            name="phonenumber"></v-text-field>
          </v-flex>
          <v-flex p>
            <v-btn v-on:click="search(pnum)">검색</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </div>
    <div>
      <v-data-table
      :headers="headers"
      :items="item"
      :search="search"
      hide-actions
      >
        <template slot="items" >
          <td class="text-xs-center">{{ item.deltaMileage }}</td>
          <td class="text-xs-center">{{ item.tradeDatetime }}</td>
          <td class="text-xs-center">{{ item.payment}}</td>
        </template>
      </v-data-table>
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
      item: [],
      headers: [
          {
            text: '마일리지 변화량',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: '내용',
            align: 'center',
            sortable: false,
            value: 'serialnumber'
          },
          {
            text: '시간',
            align: 'center',
            sortable: false,
            value: 'duedate'
          },
        ],
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

<style scoped>

</style>
