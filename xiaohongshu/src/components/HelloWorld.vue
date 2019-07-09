<template>
 <div ref="see"  class="see">
  
  <div class="hello" ref="scroll">
    <div class='left'>

      <div v-for="(item ,index) in url" :key="index"  >

        <img :src="item" alt="" srcset="">
      </div>
      <img src="https://icweiliimg1.pstatp.com/weili/l/535045387755847745.webp" alt="" class="top">

    </div>
    <div class='right'>
      <img src="https://icweiliimg1.pstatp.com/weili/l/535045387755847745.webp" alt="" class="top">
    <div v-for="(item ,index) in url" :key="index"  >

      <img :src="item" alt="" srcset="">
    </div>
    </div>
  </div>
  <div class="ying"></div>
  <div class="title">
      <img src="https://ci.xiaohongshu.com/83074709-0d05-4d1c-9d38-24a8e910d914" alt="">
    <div class="content">找 到 你 想 要 的 生 活</div>
  </div>
  <div class="foot">
    <div class="login">

    <div class="btn1 button">
      <div class="btn-center" @click="login">登陆</div>
      </div>
    <div class="btn2 button"> 
      <div class="btn-center" @click='start'>注册</div> 
    </div>
    </div>
    <div class="weilogin">

        <div class="weixin">微信登陆</div>
          <img src="../assets/wei-xin.png" alt="" class="weiurl">
        </div>
     <div class="otherlogin">
        <div class="other1 tong">
          <img src="../assets/weibo.png" alt="">
          <p class="text1">微博</p>
        </div>
        <div class="other2 tong"> 
          
          <img src="../assets/qq.png" alt="">
          <p class="text2">qq</p>
        </div>
     </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      url:[
           'http://pic.58pic.com/58pic/13/82/74/92q58PICeSI_1024.jpg',
           'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg',
           'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg',
           'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg',
           'http://pic37.nipic.com/20140115/7430301_100825571157_2.jpg',
           'http://cdn.duitang.com/uploads/item/201407/24/20140724190906_MCkXs.thumb.700_0.jpeg',
           'http://cdn.duitang.com/uploads/item/201410/08/20141008150015_dP8yJ.thumb.700_0.jpeg',
           'https://icweiliimg1.pstatp.com/weili/l/535045387755847745.webp',
           'https://weiliicimg9.pstatp.com/weili/l/286659526282051630.webp',
           'https://icweiliimg6.pstatp.com/weili/l/530529762215460902.webp',
           'https://weiliicimg6.pstatp.com/weili/l/377892414131666951.webp'

      ]
    }
  },
  
 Mounted() { 
   //js实现盒子高度等于屏幕的高度
    // console.log(this.$refs.scroll)
    //   console.log(window.screen.height)
    //   this.$refs.see.style.height = window.screen.height +'px' 
    //   console.log(this.$refs.see.style.height)
    // window.addEventListener('touchmove', (event) =>{
    //   console.log(event)
    //   event.preventDefault()
      // event.preventDefault()
      // this.$refs.scroll.scrollTop=0;
      
    // },false)
    // document.body.addEventListener('scroll', function(e){
    //   console.log(1111)
    //     e.preventDefault();
    // }, { passive: false });
  },
  methods: {
    login(){
      this.$router.push({ path:'/login',query:{content:'输入密码'}  })
    },
    start(){
      this.$router.push({ path:'/zhu'  })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  z-index: 0;
  display: flex;
  /* display: none; */
  /* transform: translateY(100%); */
  animation: mymove 40s infinite linear;
  height: 100vh;
  width: 100wh;
  
}

@keyframes mymove{
  0%{
    transform: translateY(0);
  }
 
  100%{
    transform: translateY(-70%);
  }
}
.left{
  flex: 1;
}
.right{
  flex: 1;
}
.left img{
  display: block;
  width: 100%;
  height: 230px;
  box-sizing: border-box;
}
.right img{
  display: block;
  width: 100%;
  height: 230px;
  box-sizing: border-box;
}
img.top{
  display: block;
  width: 100%;
  height: 115px;
  /* box-sizing: border-box; */
}
.see{
  overflow: hidden;
}
.ying{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #110805;
  opacity: 0.45;
  z-index: 10;
}
.title{
  display: block;
  position: absolute;
  /* font-size: 30px; */
  top: 96px;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
.title img{
  height: 100px;
  width: 200px;
}
.content{
  display: block;
  font-size: 19px;
  margin-top: 5px;
}
.foot{
  /* display: block; */
  position:absolute;
  /* font-size: 30px; */
  bottom: 47px;
  color: #fff;
  /* left: 50%;
  transform: translateX(-50%); */
  z-index: 100;
  width: 100%;
 padding: 0 auto;
  
}
.login{
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
    align-items: center;
}
.foot .button{
  flex:1;
  width: 80%;
  margin: 5px;
  border: 1px solid #fff;
  border-radius: 4px; 
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  align-content: center;
  justify-content: center;
}
.btn-center{
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  width: 50px;

}
.btn2{
  background-color: #fff;
  color: #000;
}
.weixin{
   border: 1px solid #fff;
  border-radius: 4px;
  margin: 0 auto;
  width: 82%;
  padding: 10px;
  text-align: center;
}
.weiurl{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 4px;
  left: 111px;
}
.weilogin{
  position: relative;
}
.otherlogin{
  margin-top: 30px;
  display: flex;
  padding: 0 auto;
  justify-content: center;
  align-content: center
}
.otherlogin .tong{
  flex: 1;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  
}
.otherlogin .tong img{
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
}
.otherlogin .tong .text1{
  display: block;
  position: absolute;
  top: 116px;
  left: 133px;
}
.otherlogin .tong .text2{
  display: block;
  position: absolute;
  top: 116px;
  right: 49px;
}
</style>
