import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld.vue';
import Teachers from './components/Teachers.vue'; 
import Classes from './components/Classes.vue'; 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers
    },
    {
      path: '/classes',
      name: 'classes',
      component: Classes
    }
  ]
})
