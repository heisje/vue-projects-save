import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {
        title:'test1',
        is_completed:false,
      },
      {
        title:'test2',
        is_completed:false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    ADDTODO(state, inputData){
      state.todos.push({
        title:inputData,
        is_completed:false,
      })
    },
    IS_COMPLETED(state, todo){
      state.todos[state.todos.indexOf(todo)].is_completed = !state.todos[state.todos.indexOf(todo)].is_completed
    },
    DELETETODO(state, todo){
      console.log('delete')
      state.todos.splice(state.todos.indexOf(todo),1)
    }

  },
  actions: {
    addTodo(context, inputData){
      context.commit('ADDTODO', inputData)
    },
    is_completed(context, todo){
      context.commit('IS_COMPLETED', todo)
    },
    deleteTodo(context, todo){
      context.commit('DELETETODO', todo)
    }
  },
  modules: {
  }
})
