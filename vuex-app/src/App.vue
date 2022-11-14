<template>
  <div>
    <h3>AppVue</h3>
    <div>전체: {{ todos.length }}</div>
    <div>함: {{ todos.filter((todo)=>{return todo.is_completed}).length }}</div>
    <div>아직: {{ todos.length - todos.filter((todo)=>{return todo.is_completed}).length }}</div>
    <TodoList/>
    <TodoForm/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoForm, 
    TodoList, 
  },
  computed:{
    todos(){
      return this.$store.state.todos
    }
  }
}
</script>

<style>
.border-green{
  border: 1px solid green;
}
.border-red{
  border: 1px solid red;
}
.border-blue{
  border: 1px solid blue;
}
.is-completed{
  text-decoration: line-through;
}
</style>