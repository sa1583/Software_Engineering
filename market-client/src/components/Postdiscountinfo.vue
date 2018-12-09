<template>
  <div>
    <td><v-text-field v-model="rate" label="할인율"></v-text-field></td>
    <td><v-text-field v-model="products" label = "항목"></v-text-field></td>
    <td><v-text-field v-model="start" label = "시작 일"></v-text-field></td>
    <td><v-text-field v-model="end" label = "끝나는 일"></v-text-field></td>
    <div>
      <v-btn v-on:click="post(rate, products, start,end)">할인정보 게시</v-btn>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'postdiscountinfo',
  data(){
    return{
     msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    post(ra, pr, st, en){
        if(ra && pr && st && en){
          this.$http.get('/api/insertNewDiscount',{
            params: {
              discountRate: ra,
              product : pr,
              startDate : st,
              endDate : en
            }
          }).then((response) => {
            if(response.data){
              alert("등록완료")
              router.push({path:"/AdminPage"})
            }
            else{
              alert("오류")
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
