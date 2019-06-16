import Vue from 'vue';
import Vuex from 'vuex'
// 启用应用状态管理

Vue.use(Vuex);
// 全局共享
const mutations = {
  increment (state){
    state.count++;
  }
}
const state = {
count:0
}
// 中央state，actions 是交给你调用的， increment
// 不要直接修改state.count,state
// 只有actions 才可以触发同时mutaions改变
 const actions ={increment:({commit}) =>commit('increment')}
export default new Vuex.Store({
  state,
  mutations,
})