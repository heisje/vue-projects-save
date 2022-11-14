<template>
  <div class="border-red"  :class="{ 'is-completed': todo.is_completed }">
    <h3 :class="{ 'is-completed': todo.isCompleted }">TodoListItem</h3>
    <p @click="is_completed">{{ todo.title }} {{ todo.is_completed }}</p>
    <input type="submit" value="삭제" @click="deleteTodo">
  </div>
</template>

<script>
export default {
    name:'TodoListItem',
    props:{
      todo:Object,
    },
    computed:{
      
    },
    methods:{
      is_completed(){
        console.log('clicked')
        this.$store.dispatch('is_completed', this.todo)
      },
      deleteTodo(){
        this.$store.dispatch('deleteTodo', this.todo)
      }
    }
}
</script>

<style>

</style>