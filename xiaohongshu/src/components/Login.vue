<template>
<div class="page-login">
  
    <div class="title">
       <h1>登陆后更精彩</h1>
    </div>
    <div class="input">
          <van-cell-group>
                <van-field
              center
              clearable
              v-model="mycall"
              label="手机号"
              placeholder="请输入手机号"
             @input='myphone'
            />
            <van-field
              v-model="sms"
              center
              clearable
              label="短信验证码"
              placeholder="请输入短信验证码"
              @input="password"
            >
            </van-field>
          
        </van-cell-group>
        <div class="yan" v-show="msg">获取验证码</div>
    </div>
     <div class="login" :class="phone"  v-if="flag"> 注册</div>
      <div class="login" :class="phone"  v-else @click="goindex"> 注册</div>
</div>
</template>

<script>
export default {
  name:'login' ,
  data() {
    return {
      msg:false,
      phone:'',
      sms:'',
      mycall:'',
      flag:true
    }
  },
  computed: {
    // flag(){
    //   return this.msg
    // }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {
    myphone(e){
      console.log(e)
      this.msg=false
      this.mycall=e
      if(/^1[3456789]\d{9}$/.test(e)){
        // console.log('111')
          this.msg=true;
          
          console.log(this.msg)
      }
    },
    password(e){
      
      console.log(e)
      
      if(e){
        this.phone='red',
        this.flag= false
      }else{
        this.phone='',
        this.flag= true
      }
      

    },
    goindex(){
    this.$router.push({ path:'/main'  })
    }
  },
}
</script>

<style scoped>
.page-login{
  background: #F4F7F9;
}
.title{
  margin-top: 90px;
  
}
.title h1{
  text-align: center;
  display: block;
  
}
.input{
  position: relative;
  width: 100%;
}
.yan{
  color: greenyellow;
  position: absolute;
  top: 54px;
  right: 35px;
}
.login{
  background: #E6E6E6;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  width: 80%;
  margin: 47px auto;
 
}
.red{
  background: red
}
</style>
