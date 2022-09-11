<template>
  <h2>Todo page</h2>
  <AddTodo @add-todo="addTodo" />
  <hr />
  <Loader v-if="loading" />
  <TodoList
    v-else-if="todos.length"
    v-bind:todos="todos"
    @remove-todo="removeTodo"
  />
  <p v-else class="empty">No todos!</p>
</template>

<script>
import TodoList from '@/components/todo-list.vue';
import AddTodo from '@/components/add-todo.vue';
import Loader from '@/components/loader.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, title: 'Купить хлеб', completed: false },
        { id: 2, title: 'Купить капусту', completed: false },
        { id: 3, title: 'Оплатить комунаку', completed: false },
      ],
      loading: true
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
h1 {
  text-align: center;
}
.empty {
  padding: 50px;
  color: #f55;
  text-align: center;
}
</style>
