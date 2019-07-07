<template>
   <div class="index-content">
         <div class="index-left index-all " >
           <div class="content-left" v-for=" (item,index)  in left" :key="index" >
             <img :src='item.img'> 
             <div class="content-title">

                <div class="myself-title">旅游</div>
                
             </div>
             <div class="content-myself">
               <img :src="item.avator" alt="" class="myself-url">
               <p class="my-name">{{item.uname}}</p>
               <div class="zhan" @click="leftagree(index)" >
               
               <img src="../../assets/zhan1.png" alt="" class="myself-zhan" v-if=" item.selected ">
               <img src="../../assets/zhan.png" alt="" class="myself-zhan" v-else>
               <p class="user-num">{{item.like}}</p>
               </div>
             </div>
           </div>
         </div>
         <div class="index-right index-all">
           <div class="content-right" v-for=" (item,index)  in right" :key="item">
             <img :src="item.img" alt="">
             <div class="content-title">

                <div class="myself-title">旅游</div>
                
             </div>
             <div class="content-myself">
               <img :src="item.avator" alt="" class="myself-url">
               <p class="my-name">{{item.uname}}</p>
              <div class="zhan" @click="rightagree(index)">
               
               <img src="../../assets/zhan1.png" alt="" class="myself-zhan" v-if="item.selected">
               <img src="../../assets/zhan.png" alt="" class="myself-zhan" v-else>
               <p class="user-num">{{item.like}}</p>
               </div>
             </div>
           </div>
         </div>
    </div>
</template>

<script>
export default {
  name:'Tie',
  data() {
    return {
        left:[],
        right:[],
    }
  },
  // props:['tiezhi'],
  created() {
       this.$http.get('https://www.easy-mock.com/mock/5ca4584bc4e9a575b66b62e4/example/45678')
      .then((response) =>{
    console.log(response);
     this.tiezhi=response.data.data.discoveryList;
       let length = this.tiezhi.length
     console.log(length)
     this.left = this.tiezhi.slice(0,length/2)
    this.right = this.tiezhi.slice(length/2)
     console.log(this.left);
     console.log(this.right)
     
    })
   .catch(function(error){
    console.log(error);
   });
   
  },
  methods: {
    
  },
}
</script>


<style scoped>
.index-content{
  display: flex;
  background: #F4F7F9;
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
</style>
