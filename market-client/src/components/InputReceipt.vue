<template>
  <div>
     <v-layout row>
          <v-flex xs12>
            <v-text-field 
            label="거래번호"
            v-model ="trdid" 
            name="tradeid"></v-text-field>
          </v-flex>
          <v-flex p>
            <v-btn v-on:click='submit()'>환불 신청</v-btn>
          </v-flex>
      </v-layout>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'InputReceipt',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    submit(){
      if(this.trdid){
        this.$http.get('/api/getTradeInfoById/'+this.trdid).then((response) => {
          if(response.data){
            router.push({path:"/Refund"+this.$route.params.who + "/" + response.data.tradeID})
          }
          else{
            alert("영수증 번호가 잘못 되었습니다.")
          }
        })
      }
      else{
        alert("영수증 번호를 입력해 주세요.")
      }
    }
  }
}
</script>
