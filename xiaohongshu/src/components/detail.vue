<template>
  <div class="contain">
    <div class="myself">
      <img src="../assets/fanhui.png" alt="" class="fanhui" @click="fanhui">
      <img :src="tiezhi.avator" alt="" class="avat">
      <div class="name">{{tiezhi.uname}}</div>
      <img src="../assets/fen.png" alt="" class="my-follow fen-img">
      <div class="my-follow follow-style">关注</div>
    </div>
    <div class="content" ref="content">
      <div class="better-scroll">
        <div class="swiper">
          <van-swipe >
              <van-swipe-item v-for="(image, index) in tiezhi.imgs" :key="index">
              <img :src="image" />
              </van-swipe-item>
          </van-swipe>
        </div>
        <div class="title">
          {{tiezhi.desc}}
        </div>
        <div class="comment">
          <div class="all-comment">共{{tiezhi.comment}}条评论</div>
          <div class="every-comment" v-for="(item , index) in tiezhi.comments" :key="index">
            <img :src="item.cavator" alt="" class="comment-url">
            <p class="commen-name">{{item.cname}}</p>
            <div class="comment-content">{{item.ctext}}</div>
             <div class="comment-time">{{item.ctime}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'
export default {
  name: 'Detail',
  data() {
    return {
      tiezhi:{},
      
    }
  },
  computed: {
    id(){
      return this.$store.state.id
    }
  },
  beforeMount() {
      this.$http.get('https://www.easy-mock.com/mock/5ca4584bc4e9a575b66b62e4/example/45678')
      .then((response) =>{
      
     this.tiezhi=response.data.data.discoveryList[this.id - 1];
    
      console.log(this.tiezhi)
     
    })
   .catch(function(error){
    console.log(error);
   });
  },
  methods: {
    	initScroll() {
       this.$nextTick(()=>{
        if(!this.Scroll) {
           console.log('666')
          this.Scroll = new BScroll(this.$refs.content,{
            click: true,      // 配置允许点击事件
            scrollY: true     // 开启纵向滚动
          })
        } else {
          this.Scroll.refresh()    // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
        }
      })
    },
    fanhui(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.initScroll()
  },
}
</script>

<style scoped>
.contain{
  background: #ffff;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.myself{
  margin-top: 20px;
  background: #fff;
  overflow: hidden;
  margin: 10px;
}
.fanhui{
  position: relative;
  top: 8px;
  left: -131px;
}
.avat{
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-left: 45px;
  float: left;
}
.name{
  float: left;
  margin-top: 8px;
  margin-left: 10px;
  font-weight: bold;
}
.my-follow{
  float: right;
  margin-right: 20px;
  margin-top: 4px;
  font-size: 13px;
}
.fen-img{
  margin-top: 7px;
}
.follow-style{
  color: red;
  padding: 5px 10px;
  border: 1px solid red;
  border-radius: 17px;
}
.content{
 overflow: hidden;
 height: 93vh;
}
.swiper img{
  height: 300px;
  width: 100%;
}
.title{
  padding: 10px;
  border-bottom:1px solid #E7E7E7;
  font-size: 14px;
  color: #333;

}
.comment{
  margin: 10px;
  color: #999;
}
.every-comment{
  position: relative;
  border-bottom:1px solid #E7E7E7;
  overflow: hidden;
  padding: 9px;
  
}
.comment-url{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  padding: 10px;
}
.commen-name{
  position: absolute;
  top: -6px;
  left: 68px;
}
.comment-content{
  position: absolute;
  top: 35px;
  left: 68px;
  color: #000;
  overflow: hidden;
}
.comment-time{
   /* position: absolute;
  top: 38px;
  left: 206px; */
  float: right;
  font-size: 12px
}
</style>
