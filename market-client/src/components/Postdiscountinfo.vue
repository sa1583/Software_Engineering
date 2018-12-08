<template>
  <div>
    <td><v-text-field v-model="method" label="할인 방법"></v-text-field></td>
    <td><v-text-field v-model="rate" label="할인율"></v-text-field></td>
    <td><v-text-field v-model="products" label = "항목"></v-text-field></td>
    <td><v-text-field v-model="start" label = "시작 일"></v-text-field></td>
    <td><v-text-field v-model="end" label = "끝나는 일"></v-text-field></td>
    <div>
      <v-btn v-on:click="post(products, start,end)">할인정보 게시</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
     methods:{
    post(me, ra, pr, st,en){
      if(me && ra && pr && st && en){
        this.$http.get('/api/insertNewDiscount',{
          params: {
            startDate : st,
            endDate : end,
            productID : pr
          }
        }).then((response) => {
          if(response.data){
            alert("가입되었습니다!")
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
