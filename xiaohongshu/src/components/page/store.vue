<template>
  <div class="store" >
    <div class="store-header">
      <img src="../../assets/caidan.png" alt="" class="header-left">
      <input type="text"  placeholder="大家都在搜“冰箱里的小宝宝”">
      <img src="../../assets/lei.png" alt="" class="header-right">
    </div>
    <div class="main">
      
    </div>
      <div class="good-scroll" ref='foot'>
       <div class="foot" >

        <div class= "good-flex">

            <div class="good-content good-left" v-for="(item,index) in good" :key='index'>
              <div class="good-img">

              <img :src="item.img" alt="">
              </div>
                <div class="good-title">{{item.title}}</div>
                <div class="good-value">￥ {{item.newPrice}}</div>
            </div>
        </div>
        <div class= "good-flex">

            <div class="good-content good-left" v-for="(item,index) in good" :key='index'>
              <div class="good-img">

              <img :src="item.img" alt="">
              </div>
                <div class="good-title">{{item.title}}</div>
                <div class="good-value">￥ {{item.newPrice}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  naem:'Good',
  data() {
    return {
      good:[]
    }
  },
  methods: {
    scroll(){
        this.$nextTick(()=>{
        if(!this.Scroll) {
           console.log('666')
          this.Scroll = new BScroll(this.$refs.foot,{
            click: true,      // 配置允许点击事件
            scrollY: true     // 开启纵向滚动
          })
        } else {
          this.Scroll.refresh()    // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
        }
      })
    }
  },
  beforeMount() {
      this.$http.get('https://www.easy-mock.com/mock/5ca4584bc4e9a575b66b62e4/example/45678')
      .then((response) =>{
      
     this.good=response.data.data.goodsList
    
      console.log(this.good)
     
    })
   .catch(function(error){
    console.log(error);
   });
  },
  mounted() {
     this.scroll()
  }
}
</script>

<style scoped>
.store{
  background: #ffffff;

}
.store-header{
  padding-top: 20px;
}
.header-left{
  display: block;
   float: left;
   margin-left: 10px;
   margin-right: 10px;
   margin-top: 7px;
}
.store-header input{
  float: left;
  /* display: inline; */
  width: 70%;
  border: 0;
  background: #EFEFEF;
  color:#A1A1A1;
  text-align: center;
  margin-right: 10px;
  padding: 5px;
  border-radius: 33px;
}
.good-scroll{
  height: 88vh;
  overflow: hidden;
}
.foot{
  display: flex;
}
.good-flex{
  flex: 1;
}
.foot .good-content{

    
    overflow: hidden;
    float: left;
    margin: 3px;
}

.good-content img{
 height: 100%;
 width: 100%;
}
.good-title{
  font-weight: bold;
  font-size: 17px;
}
.good-value{
  color: red;
}
</style>
