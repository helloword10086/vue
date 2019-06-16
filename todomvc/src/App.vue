<template>
  <div >
    <counter :count='count' :increment='increment'/>
    <counter-brother :count='count'/>
  </div>
</template>

<script>
import counter from './components/Counter'
 import counterBrother from './components/counterBrother'
export default {
  name: 'App',
  data() {
    return {
      // count: this.state.count
    }
  },
  components: {
    counter,
    counterBrother,
  },
  methods: {
    // increment(e){
    //   console.log(e)

    // }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
