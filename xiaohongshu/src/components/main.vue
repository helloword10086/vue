<template>
  <div>
      <div class="tab">
          <div class="cont">

            <router-link to="/main">首页</router-link>
            <router-link to="/main/store">商城</router-link>
            <router-link to="/main/fen">+</router-link>
            <router-link to="/main/message">消息</router-link>
            <router-link to="/main/mine">我</router-link>
          </div>
      </div>
     <router-view></router-view>
  </div>
</template>

<style scoped>
.tab{
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
}
.cont{
  display: flex;
}
.cont a{
  display: block;
  flex: 1;
  text-align: center;
  padding: 5px;
}
</style>


