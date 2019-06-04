<template>
   <div class="look" @click="got">{{msg}}
      
   </div>
</template>

<script>
export default {
  name: 'LookOne',
  data (){
    return{
      msg: '看'
    }
  },
  methods: {
    got() {
     this.$router.push('/')
      // this.$router.push({ path: '/look/look-two'})
      // this.$router.push({name:'LookTwo',param:{ id: 12345}}
    },
    beforeRouteEnter (to, from, next) {
    // ...
    console.log(to,from);
    next()
  }
  },
}
</script>