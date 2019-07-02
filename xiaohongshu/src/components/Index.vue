<template>
  <div class="header">
  <van-tabs v-model="active" animated>
  <van-tab title="关注">

  </van-tab>
  <van-tab title="发现">
    <div class="index-content">
         <div class="index-left index-all">
           <div class="content-left" v-for="index in 5" :key="{index}">
             <img src="http://cdn.duitang.com/uploads/item/201407/24/20140724190906_MCkXs.thumb.700_0.jpeg"> 
             <div class="content-title">

                <div class="myself-title">没有公主命就别</div>
                
             </div>
             <div class="content-myself">
               <img src="http://cdn.duitang.com/uploads/item/201407/24/20140724190906_MCkXs.thumb.700_0.jpeg" alt="" class="myself-url">
               <p class="my-name">name</p>
               <div class="zhan" @click="useragree" data-index='index'>
               
               <img src="../assets/zhan.png" alt="" class="myself-zhan" v-if="flag">
               <img src="../assets/zhan1.png" alt="" class="myself-zhan" v-else>
               <p class="user-num">1人</p>
               </div>
             </div>
           </div>
         </div>
         <div class="index-right index-all">
           <div class="content-right" v-for="index in 5" :key="{index}">
             <img src="http://cdn.duitang.com/uploads/item/201407/24/20140724190906_MCkXs.thumb.700_0.jpeg" alt="">
             <div class="content-title">

                <div class="myself-title">没有公主命就别</div>
                
             </div>
             <div class="content-myself">
               <img src="http://cdn.duitang.com/uploads/item/201407/24/20140724190906_MCkXs.thumb.700_0.jpeg" alt="" class="myself-url">
               <p class="my-name">name</p>
               <div class="zhan">

               <img src="../assets/zhan.png" alt="" class="myself-zhan">
               <p class="user-num">1人</p>
               </div>
             </div>
           </div>
         </div>
    </div>
  </van-tab>
  <van-tab title="附近">附近</van-tab>
 
</van-tabs>
<img src="../assets/ding.png" alt="" class="ding">
  </div>
</template>
<script>
export default {
  name:'Index',
  data() {
    return {
       active: 1,
       flag:true
    }
  },
  methods: {
    useragree(e){
      console.log(e)
     this.flag = !this.flag
    }
  },

}
</script>

<style>
.header{
  background: #FFFFFF;
  
}
.van-tabs__wrap{
  width: 50%;
  margin: 0 auto;
}
.ding{
  position: absolute;
  display: block;
  top: 11px;
  left: 12px;
  width: 27px;
  height: 25px;
}
.index-content{
  display: flex;
  
}
.index-all{
  flex:1;
  
  overflow: hidden;
}
.index-left{
  margin: 4px;
}
.index-right{
  margin:4px 4px 4px 0

}
.content-left img{
  width: 100%;
  height: 200px;
}
.content-right img{
width: 100%;
  height: 230px;
}
.myself-title{
  font:bold;
  /* margin: 5px; */
  font-size: 20px;
  text-align: center
}
.content-myself{
  overflow: hidden;
  position: relative;
}
.content-myself .myself-url{
  border-radius: 100%;
  width: 30px;
  height: 30px;
  /* display: block; */
}
.content-myself p{
  
  
  
  color: #6A6A6A;
  
}
.my-name{
  position: absolute;
  display: block;
top: -13px;
  left: 38px;
}
.zhan{
  top: 6px;
  right: 40px;
  position: absolute;
}
.content-myself .myself-zhan{
    display: block;
  
  color: #6A6A6A;
  
  width: 30px;
  height: 27px;
  float: left;
}
.user-num{
  /* display: inline-block; */
  position: absolute;
  display: block;
  top: -16px;
  right: -31px;
  width: 30px;
}
</style>
