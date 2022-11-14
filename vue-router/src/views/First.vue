<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Second msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Second from '@/components/Second.vue'

export default {
  name: 'First',
  components: {
    Second,
  }
}
</script>
