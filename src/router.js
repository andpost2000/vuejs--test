import {createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home';
import Todos from '@/views/todos';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: Todos
    }
  ]
});
