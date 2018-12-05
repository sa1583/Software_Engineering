<template>
  <div id="app">
    <router-view id="body"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted () {
    WebFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900']
      },
      active: this.setFontLoaded
    })
  },
  methods: {
    setFontLoaded () {
      this.$emit('font-loaded')
    }
  }
}
</script>

<style>
 #body{
  margin-top: 30px; 
 }
</style>
