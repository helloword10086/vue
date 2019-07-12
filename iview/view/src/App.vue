<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import originJSONP from 'jsonp'
export default {
  name: 'App',
  

  created() {
    console.log(666)
    this.$http.get('/api/ajax/movieOnInfoList?token=')
     .then (res => {
        console.log(res)
     })
  },
}
</script>

<style>
html ,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  height: 100%;
}
</style>
