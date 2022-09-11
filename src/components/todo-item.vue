<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <b>{{index + 1}}</b>
      {{todo.title}}
    </span>
    <button
      v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>


<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: Number
    }
  }
</script>


<style lang="scss" scoped>
  li {
    width: 100%;
    display: flex;
    font-weight: 700;
    padding: 5px 0;
    border-bottom: 1px dashed #000;
  }
  input {
    margin: 5px 10px;
  }
  b {
    margin-right: 5px;
    font-weight: 400;
  }
  button {
    width: 35px;
    height: 35px;
    padding: 0;
    border-radius: 50%;
    margin-left: auto;
    font-size: 22px;
    line-height: 25px;
    cursor: pointer;
  }
  .done {
    text-decoration: line-through;
    color: #444;
  }
</style>
