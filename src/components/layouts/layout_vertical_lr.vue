<template>
  <div class="layout_vertical__lr">
    <div class="layout_vertical__left">
      <slot name="left"></slot>
    </div>
    <div class="layout_vertical__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {}
</script>
<style lang="less">
.layout_vertical__lr {
  .size(100%);
  .flex_box();
  .layout_vertical__left {
    min-width: 100px;
    height: 100%;
  }
  .layout_vertical__right {
    .flex_1();
    height: 100%;
  }
}
</style>