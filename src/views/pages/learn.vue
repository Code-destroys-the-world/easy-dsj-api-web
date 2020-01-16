
<template>
  <div class="fd-learn">
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
  .fd-learn {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
</style>