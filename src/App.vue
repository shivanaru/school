<template>
  <div id="app">
    <MenuBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'; 
import MenuBar from './components/MenuBar.vue'

@Component({
  components: {
    MenuBar
  }
})
export default class App extends Vue{
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
