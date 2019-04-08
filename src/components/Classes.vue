<template>
  <div class="container">
    <div class="row">
      Hello, {{name}}!!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Classes extends Vue {
    name:string = 'Classes page'; 
}
</script>