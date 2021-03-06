// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import store from './store'
// import BScroll from "better-scroll";

Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$http = axios;

//  Vue.prototype.HOST = "./api"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
