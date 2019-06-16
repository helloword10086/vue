<template>
  <div>
    Clicked:{{$store.state.count}}
   <button @click="$store.commit('increment')">+</button>
  </div>
</template>
<script>
// 让store里的
import{mapActions} from 'vuex'
export default {
  props:['count'],
 data (){
   return {
    
   }
 } ,
 methods: mapActions(['increment']),
 computed: {
  // count(){
  //   this.$emit('increment',this.count)
  // }
 },
}
</script>