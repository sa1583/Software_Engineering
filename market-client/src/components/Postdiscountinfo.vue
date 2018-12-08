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
  export default {
    data(){
      return{
        discountInfo:[]
      }
    },
    methods:{
    post(ra, pr, st, end){
      if(ra && pr && st && en){
        this.$http.get('/api/insertNewDiscount',{
          params: {
            discountRate: ra,
            startDate : st,
            endDate : end,
            productID : pr,
            numberOfBuying : 0,
            numberOfBonus : 0
          }
        }).then((response) => {
          if(response.data){
            alert("등록완료")
            router.push({path:"/"})
          }
          else{
            alert("")
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
