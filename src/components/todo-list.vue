<template>
  <ul>
    <TodoItem
      v-for="(todo, i) of todos"
      v-bind:index="i"
      v-bind:todo="todo"
      v-on:remove-todo="removeTodo"
    />
  </ul>
</template>


<script>
  import TodoItem from "@/components/todo-item.vue"

  export default {
    props: ['todos'],
    components: {
      TodoItem
    },
    methods: {
      removeTodo(id) {
        this.$emit('remove-todo', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    max-width: 500px;
    list-style: none;
    margin: 0;
    padding: 10px;
  }
</style>
