<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
   <div class="user-info">
    <el-dropdown>
  <span class="el-dropdown-link">
    {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>退出</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>

    </div>

  </div>
</template><script>
export default {
  name: 'Header',
  data() {
    return {
      name: ''
    }
  },
  computed: {
     userName(){
      return  localStorage.getItem('userName')
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
.header{
  background-color: #409eff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.header .logo{
  float: left;
  width: 250px;
  text-align: center;
}
.user-info{
  float: right;
  color: #fff;
  font-size: 16px;
  padding-right: 50px;
}
.el-dropdown-link{
  text-align: center;
  position: relative;
  display: inline-block;
 padding-left: 50px;
 color: #fff;
 cursor: pointer;

}
</style>
