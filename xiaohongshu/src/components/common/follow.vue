<template>
  <div class="follow">
     <div class="hey">
       <img src="../../assets/follow.png" alt="">
       <img src="../../assets/follow2.png" alt="">
      
     </div>
     <div class="write">
       <img src="../../assets/write.png" alt="">
     </div>
     <div class="follow-user">
       <p>你可能感兴趣的用户</p>
       <div class="user">

        <img src="../../assets/user1.png" alt="">
          <img src="../../assets/user2.png" alt="">
          <img src="../../assets/user3.png" alt="">
       </div>
     </div>
     <div class="tuijian">
       <tie  />
     </div>
  </div>
</template>

<script>
import tie from './tie'
export default {
  name: 'follow',
  data() {
    return {
      // tiezhi:[]
    }
  },
  components:{tie},
  created() {
  //       this.$http.get('https://www.easy-mock.com/mock/5ca4584bc4e9a575b66b62e4/example/45678')
  //   .then((response) =>{
  //   console.log(response);
  //    this.tiezhi=response.data.data.discoveryList;
     
     
  //   })
  //  .catch(function(error){
  //   console.log(error);
  //  });
  },
}
</script>

<style scoped>
img{
  margin: 0;
  padding: 0;
}
.hey{
  overflow: scroll;
  white-space: nowrap;
  /* background: #F4F7F9; */
  background: #fff;
}
.user{
  overflow: scroll;
  white-space: nowrap;
  /* background: #F4F7F9; */
  background: #fff;
}
</style>
