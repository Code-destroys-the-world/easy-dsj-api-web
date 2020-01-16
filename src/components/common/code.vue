<template>
  <div class="fd-modules_code">
    <div class="fd-modules_code__leftExhibition">
      <slot name="exhibition"></slot>
    </div>
    <div class="fd-modules_code__leftCode">
      <pre>
        <code>
          <slot name="code"></slot>
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'apiCode',
})
export default class extends Vue {}
</script>
<style lang="less">
  .fd-modules_code {
    width: 100%;
    height: 500px;
    .fd-modules_code__leftExhibition {
      width: 50%;
      float: left;
      height: 500px;
    }
    .fd-modules_code__leftCode {
      width: 50%;
      float: right;
      height: 500px;
      overflow: auto;
    }
  }
</style>