<template>
  <div class="border-blue">
    <h3>TodoForm</h3>
    <div>{{ inputData }}</div>
    <input type="text" v-model="inputData" @keydown.enter="addTodo">
  </div>
</template>

<script>
export default {
    name:'TodoForm',
    data(){
      return{
        inputData:''
      }
    },
    methods:{
      addTodo(){
        this.$store.dispatch('addTodo', this.inputData)
        this.inputData=''
      }
    }
}
</script>

<style>

</style>