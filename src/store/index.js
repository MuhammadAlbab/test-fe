import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: [],
    comment: [],
  },
  mutations: {
    setPosts(state, payload){
      state.posts = payload
    },
    setPost(state,payload){
      state.post = payload
    },
    setComment(state,payload){
      state.comment = payload
    }
  },
  actions: {
    async getPosts({commit}){
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('setPosts', res.data)
    },
    async getPost({commit}, payload){
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
      commit('setPost', res.data)
    },
    async getComment({commit}, payload){
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
      commit('setComment', res.data)
    }
  },
  modules: {
  }
})
