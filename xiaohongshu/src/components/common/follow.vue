<template>
  <div class="follow"  ref="follow">
    <div class='follow-scroll'>

     <div class="hey" >
       <img src="../../assets/follow.png" alt="">
       <img src="../../assets/follow2.png" alt="">
      
     </div>
     <div class="write">
       <img src="../../assets/write.png" alt="">
     </div>
     <div class="follow-user">
       <p>你可能感兴趣的用户</p>
       <div class="user" ref="user">
          <div class="user-img">

          <img src="../../assets/user1.png" alt="">
          <img src="../../assets/user2.png" alt="">
          <img src="../../assets/user3.png" alt="">
          </div>
       </div>
     </div>
     <div class="tuijian">
       <tie  />
     </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import tie from './tie'
export default {
  name: 'follow',
  data() {
    return {
      // tiezhi:[]
    }
  },
  components:{tie},
  methods: {
    	initScroll() {
       this.$nextTick(()=>{
        if(!this.Scroll ||this.Scroll2) {
          // console.log('666')
          this.Scroll = new BScroll(this.$refs.follow,{
            click: true,      // 配置允许点击事件
             scrollY: true,     // 开启纵向滚动
            // scrollX:true,
            
          })
          this.Scroll2 = new BScroll(this.$refs.user,{
            click: true,
            scrollX: true,
             eventPassthrough: 'vertical'
          })
        } else {
          this.Scroll.refresh()    // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
          this.Scroll2.refresh()
        }
      })
    }
  },
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
  mounted() {
    this.initScroll()
  },
}
</script>

<style scoped>
.follow{
  height: 86vh;
  overflow: hidden;
}
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
  /* overflow: scroll;
  white-space: nowrap;
  
  background: #fff; */
 
  /* width: 100wv; */
  overflow: hidden;
   width: 100vw;
   
}
.user-img{
 white-space: nowrap;
 width: 500px;
/* overflow: hidden; */
}
.user img{
  /* display: block;
  float: left; */
} 
</style>
