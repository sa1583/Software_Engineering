<template>
  <div>
    <input v-model="pnumber" placeholder="전화번호를 입력하세요">
    <button>확인</button>
  </div>
</template>
<script>
export default {
  name: 'InputMemNum',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
