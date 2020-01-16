<template>
  <div class="fd-modules_title">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'apiTitle',
})
export default class extends Vue {}
</script>
<style lang="less">
  .fd-modules_title {
    h2 {
      font-weight: 400;
      color: #1f2f3d;
      font-size: 28px;
      margin: 0;
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      margin: 10px 0;
    }
  }
</style>