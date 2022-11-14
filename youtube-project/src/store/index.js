import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const APT_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
import axios from 'axios'

export default new Vuex.Store({
  state: {
    playerVideoID:'M7lc1UVf-VE',
    qText:'',
    jsonSave:{
    },
  },
  getters: {

  },
  mutations: {
    CHANGE_QTEXT(state){
      state.qText = ''
    },
    CHANGE_VIDEO_ID(state, videoId){
      state.playerVideoID = videoId
    }
  },
  actions: {
    getYoutubeAPI(context, qText){
      axios({
        url: `https://www.googleapis.com/youtube/v3/search`,
        method: 'get', 
        params:{
            key:APT_KEY,
            part:'snippet',
            type:'video',
            q:qText,
            maxResults:15
        }
      })
        .then((response)=>{
            console.log(qText)
            console.log(response)
            console.log(response.data.items)
            this.state.jsonSave = response.data.items
        })
      context.commit('CHANGE_QTEXT')
    },
    dataToPlayer(context, videoId){
      context.commit('CHANGE_VIDEO_ID', videoId)
    }
  },
  modules: {
  }
})
