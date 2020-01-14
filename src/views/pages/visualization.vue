
<template>
  <div class="fd-visualization">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
}

</script>
<style lang="less">
  .fd-visualization {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
</style>