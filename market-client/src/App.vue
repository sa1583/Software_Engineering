<template>
  <div id="app">
    <router-view id="body"></router-view>
  </div>
</template>

<script>
import WebFontLoader from 'webfontloader'

export default {
  data(){
  },
  name: 'App'
}
</script>

<style lang="stylus">
 @import '~vuetify/src/stylus/settings/_variables.styl'
</style>
