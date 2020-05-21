import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visible: false,
    time: 0
  },
  mutations: {
    changeValue: state => {
      if(state.visible == true){
        state.visible = false
      }else{
        state.visible = true
      }
    },
    setTime(state,value) {
      state.time = value
    }
    
  },
  getters: {
    time: (state) => {
      return state.time
    }
  },
  actions: {
    changeValue: ({commit}) => commit('changeValue'),
    setTime(context, value){
      context.commit('setTime',value)
    }
    
  },
   
  modules: {}
});
