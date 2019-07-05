import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    idToken:null,
    userId:null,
  },
  mutations: {
    authUser(state,userData){
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },
  actions: {
    signup({commit},authData){
      axios.post('',{
        email:authData.email,
        password:authData.password,
        returnSecureToken:true
      }).then(response =>{
        commit('authUser',{
          token:response.data.idToken,
          userId:response.data.localId
        })
      }).catch(err =>{
        console.log(err)
      })
    },
    login({commit},authData){
      axios.post('',{
        email:authData.email,
        password:authData.password,
        returnSecureToken:true
      }).then(response =>{
        commit('authUser',{
          token:response.data.idToken,
          userId:response.data.localId
        })
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  getters:{

  }
})
