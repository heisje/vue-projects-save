import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article_id : 3,
    articles:[
      // {
      //   id:1,
      //   title:'테스트1',
      //   content:'내용이에오'
      // },
      // {
      //   id:2,
      //   title:'테스트2',
      //   content:'내용이에오'
      // }
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_ARTICLE(state, payload){
      state.articles.push(payload)
      state.article_id += 1
    }
  },
  actions: {
    createArticle(context, payload){
      context.commit('CREATE_ARTICLE',payload)
    }
  },
  modules: {
  }
})
