<template>
  <div>
    <h3>videoDetail</h3>
    <iframe id="player" type="text/html" width="640" height="360"
    :src="`http://www.youtube.com/embed/${playerVideoID}?enablejsapi=1`"
    frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    name:'VideoDetail',
    computed:{
      playerVideoID() {
        return this.$store.state.playerVideoID
      },
    }
    
}
</script>

<style>

</style>