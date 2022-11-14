<template>
  <div id="app">
    <h1>Cat Image</h1>
    <div>
      <input type="submit" value="Get-Cat" @click="updateCatImg">
    </div>
      <img :src="catUrl" alt="">
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      catUrl:''
    }
  },
  mounted(){
    console.log('hihi')
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then((response)=>{
      console.log(response.data[0].url)
      this.catUrl=response.data[0].url
    })
  },
  methods:{
    updateCatImg(){
      axios.get('https://api.thecatapi.com/v1/images/search')
      .then((response)=>{
        console.log(response.data[0].url)
        this.catUrl=response.data[0].url
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
