<template>
  <header class="page-header">
    <router-link to="/" class="logo"><h1>Todo app</h1></router-link>
    <Currency />
  </header>
  <router-view />
</template>

<script>
import Currency from '@/components/currency.vue';

export default {
  components: {
    Currency
},
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.page-header {
  display: flex;
  align-items: center
}
.logo {
  width: 50%;
  color: aqua;

  &:hover {
    text-decoration: none;
  }

  &.router-link-active {
    pointer-events: none;
    text-decoration: none;
  }
}

</style>
