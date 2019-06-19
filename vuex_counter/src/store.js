
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const  state = {
   count: 0,
}
//改变
const  mutations = {
  increment (state){
    state.count++;
  },
  decrement (state){
    state.count--;
  }
}
//动作  部门 不能修改 state
const actions = {
    increment: ({commit}) => commit('increment'),
   //actions 里不可以修改state，可以读
   incrementIfOdd ({ commit,state}){
     if((state.count +1)%2==0){
     
       commit('increment' )
     }
   }
   
}
// 组件里的computed
const getters ={
  eventOrOdd: state =>state.count % 2 ===0?'even':'old'
}
export default new Vuex.Store({
  state,mutations,actions,getters
})