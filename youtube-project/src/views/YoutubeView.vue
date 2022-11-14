<template>
  <div>
    <button @click="test">버튼</button>
    <h3>YoutubeView</h3>
    
    <TheSearchBar/>
    <VideoDetail/>
    
    <VideoList/>
    
    <VideoListItem/>
  </div>
</template>

<script>
// import axios from 'axios'
import TheSearchBar from '@/components/TheSearchBar.vue';
import VideoDetail from '@/components/VideoDetail.vue';
import VideoList from '@/components/VideoList.vue';


const APT_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
export default {
    name:"YoutubeView",
    components:{
        TheSearchBar,
        VideoDetail,
        VideoList,
    },
    data(){
        return{
        }
    },
    methods:{
        test(){
            console.log(APT_KEY)
        },
    },
    computed: {
    },


}
</script>

<style>

</style>