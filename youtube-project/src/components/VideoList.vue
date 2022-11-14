<template>
  <div>
    <div v-for="(value, index) in jsonSave" :key="index" @click="dataToPlayer(value.id.videoId)" style="padding:1rem; border: 1px solid green;">
        <div>{{ value.snippet.title }}</div>
        <div>{{ value.snippet.description }}</div>
    </div>
    <VideoListItem/>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue';
export default {
    name:'VideoList',
    components:{
      VideoListItem,
    },
    methods:{
      dataToPlayer(videoId){
        this.$store.dispatch('dataToPlayer', videoId)
      }
    },
    computed:{
      jsonSave(){
        return this.$store.state.jsonSave 
      }
    }
}
</script>

<style>

</style>