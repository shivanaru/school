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
export default class Teachers extends Vue {

 name: string = 'Teachers page'; 
}
</script>