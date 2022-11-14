<template>
  <div class="border-green">
    <h3 >TodoListVue</h3>
    <div v-for="(todo, index) in todos" :key="index" >
      <TodoListItem :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
    name:'TodoList',
    components:{
        TodoListItem,
    },
    computed: {
      todos() {
        return this.$store.state.todos
      }
    }
}
</script>

<style>

</style>