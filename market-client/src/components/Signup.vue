<template>
  <div>
    <form>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>생년월일</th>
            <th>주소</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
          </tr>
        </tbody>
      </table>
    </form>
    <div>
      <button>가입</button>
    </div>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'SellectBuynRefund',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
