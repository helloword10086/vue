import Vuex from 'vuex'

import Vue  from 'vue'

Vue.use(Vuex)

 const state={
  id:''
}

 const mutations={
     selectid(state,id){
       state.id = id
     }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store