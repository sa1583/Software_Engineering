<template>
  <div>
    <!-- <container style="float:large"> -->
      <button>할인정보 게시</button>
    <!-- </container> -->
    <!-- <container style="float:left"> -->
      <button>상품 발주</button>
    <!-- </container> -->
    <!-- <container style="float:left"> -->
      <button>매출조회</button>
    <!-- </container> -->
    <!-- <container style="float:left"> -->
      <button>재고조회</button>
    <!-- </container> -->
    <!-- <container style="float:right"> -->
      <button>재고관리</button>
    <!-- </container> -->
  </div>
</template>
<script>
export default {
  name: 'AdminPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
button {
  width: 20%;
  height: 500px;
  box-sizing: border-box;
  float: left;
}
</style>
