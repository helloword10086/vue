<template>
  <div class="header">
      <van-tabs v-model="active" animated>
          <van-tab title="关注">
            <input type="text" placeholder="大家都在授“轻喜剧”">
            <follow/>
          </van-tab>
          <van-tab title="发现">
           <input type="text" placeholder="大家都在授“轻喜剧”">
                 <div class="scroll" ref='wrapper'>
                  <div class="index-content" >

                      <div class="index-left index-all " >
                        <div class="content-left" v-for=" (item,index)  in left" :key="item.id" >
                          <img :src='item.note_image' @click="detail(index + 1)"> 
                          <div class="content-title">

                              <div class="myself-title">{{item.title}}</div>
                              
                          </div>
                          <div class="content-myself">
                            <img :src="item.writer_img" alt="" class="myself-url">
                            <p class="my-name">{{item.writer}}</p>
                            <div class="zhan" @click="leftagree(index)" >
                            
                            <img src="../assets/zhan1.png" alt="" class="myself-zhan" v-if=" item.selected ">
                            <img src="../assets/zhan.png" alt="" class="myself-zhan" v-else>
                            <p class="user-num">{{item.like}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="index-right index-all">
                        <div class="content-right" v-for=" (item,index)  in right" :key="item.id" >
                          <img :src="item.note_image" alt=""  @click='detail(index +1)'>
                          <div class="content-title">

                              <div class="myself-title">{{item.title}}</div>
                              
                          </div>
                          <div class="content-myself">
                            <img :src="item.writer_img" alt="" class="myself-url">
                            <p class="my-name">{{item.writer}}</p>
                            <div class="zhan" @click="rightagree(index)">
                            
                            <img src="../assets/zhan1.png" alt="" class="myself-zhan" v-if="item.selected">
                            <img src="../assets/zhan.png" alt="" class="myself-zhan" v-else>
                            <p class="user-num">{{item.like}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                 </div>
            </div>
          </van-tab>
          <van-tab title="附近">
            <input type="text" placeholder="大家都在授“轻喜剧”">
            <nearly :address='address'/>
          </van-tab>
        
      </van-tabs> 
     <img src="../assets/ding.png" alt="" class="ding"  >


  </div>

</template>
<script>
  import nearly from './common/nearly';
  import follow from './common/follow';
  import BScroll from 'better-scroll'
export default {
  name:'Index',
  components:{
    nearly,
    follow
  },
  data() {
    return {
       like:-1,
       active: 1,
       flag:true,
       tiezi:[],
       left:[],
       right:[],
      address:[]
    }
  },
  methods: {
    leftagree(e){
      console.log(e)
      
     this.left[e].selected=!this.left[e].selected
     if(this.left[e].selected){
       this.left[e].like= +this.left[e].like + 1
     }else{
        this.left[e].like=+this.left[e].like - 1
     }
    },
    rightagree(e){
       console.log(e)
      
     this.right[e].selected=!this.right[e].selected
     if(this.right[e].selected){
       this.right[e].like= +this.right[e].like + 1
     }else{
        this.right[e].like=+this.right[e].like - 1
     }
    },
    detail(id){
      
      this.$store.commit('selectid',id)
      this.$router.push({ path:'/detail'  })
    },

    initScroll() {
      //  this.$nextTick(()=>{
        
           console.log('666')
          this.Scroll = new BScroll(this.$refs.wrapper,{
            click: true,      // 配置允许点击事件
            scrollY: true     // 开启纵向滚动
          })
        
      // })
    }

  },
  created() {
    let that = this
    this.$http.get('https://www.easy-mock.com/mock/5b1e17a0d4a14a3247a6cd6b/')
    .then((response) =>{
    console.log(response);
     that.tiezi=response.data.data;
     this.address = response.data.data[1].notes
     let arry = response.data.data[0].notes;
      let length = arry.length
      this.left = arry.slice(0,length/2)
     this.right = arry.slice(length/2,length)
     console.log(this.tiezi)
    })
   .catch(function(error){
    console.log(error);
   });
  },
  mounted() {
    this.$nextTick( () =>{

      this.initScroll()
    })
  },
}
</script>

<style>
.header{
  background: #FFFFFF;
  
}
input{
  display: block;
  width: 90%;
  background: #F0F0F0;
  color: #999999;
  border-radius: 10px;
  text-align: center;
  padding: 6px;
  border-width: 0;
  margin: 5px auto;
}
.van-tabs .van-tabs__wrap{
  width: 50%;
  margin: 0 auto;
  background: #F4F7F9
  
}
.ding{
  position: absolute;
  display: block;
  top: 11px;
  left: 12px;
  width: 27px;
  height: 25px;
}

.scroll{
   height: 86vh;
   overflow: hidden;
}
.index-content{
  display: flex;
  /* height: 80vh; */
  background: #F4F7F9
}
.index-all{
  flex:1;
  
  overflow: hidden;
}
.index-left{
  margin: 4px;
  /* background: #ffffff; */
}
.index-right{
  margin:4px 4px 4px 0

}
.content-left{
  border-radius: 3px;
  margin-bottom: 8px;
  background: #ffffff;
}
.content-left img{
  width: 100%;
  /* height: 200px; */
}
.content-right{
 border-radius: 3px;
  margin-bottom: 8px;
  background: #ffffff; 
}
.content-right img{
width: 100%;
  /* height: 230px; */
}
.myself-title{
  font:bold;
  /* margin: 5px; */
  font-size: 15px;
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
