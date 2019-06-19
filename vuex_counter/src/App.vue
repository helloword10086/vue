<template>
  <div id="app">
        {{eventOrOdd}}<br/>
    {{$store.state.count}}
    <button @click='increment'>+</button>
    <button @click="$store.commit('decrement')">-</button>
    <button @click="incrementIfOdd">odd</button>
  </div>
</template>

<script>

import { mapActions , mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    

  },
  computed: mapGetters['eventOrOdd'],
  
  methods: mapActions(['increment'
  ,'incrementIfOdd'])
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
