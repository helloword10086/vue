<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  //   document.body.addEventListener('scroll', (event) =>{
  //     console.log('11111')
  //     // event.preventDefault()
      
  //   },true)
   },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
  margin: 0;
  
}
html{
  width: 100%;
  height: 100%;
  background: #F4F7F9
}
#app {
  /* background: #F4F7F9; */
}
</style>
