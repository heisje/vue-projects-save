<template>
  <div>
    <h3>TheSearchBar</h3>
    <div>
        <input type="text" v-model="qText" @keyup.enter="getYoutubeAPI">
    </div>
  </div>
</template>

<script>
export default {
    name:"TheSearchBar",
    data(){
        return { 
            qText:'',
        }
    },
    methods:{
        getYoutubeAPI(){
            this.$store.dispatch('getYoutubeAPI', this.qText)
        }
    }
}
</script>

<style>

</style>