<template>
  <div>
    <container style="width:60%; float:left">
      <button>구매</button>
      <button>환불</button><br>
      <button>마일리지 확인</button><br>
      <button>관리자 로그인</button><br>
      <button>회원가입</button><br>
    </container>
    <container style="width:40%; float:right">
      <table>
        <thead>
          <tr>
            <td>
              할인 정보
            </td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </container>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
