<template>
  <div class="fd-home_layout">
    <div class="fd-home_header">
      <slot name="header"></slot>
    </div>
    <div class="fd-home_content">
      <div class="fd--home_nav">
        <slot name="nav"></slot>
      </div>
      <div class="fd--home_content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'home_layout',
})
export default class LayoutHome extends Vue {

}
</script>
<style lang="less">
.fd-home_layout {
  .size(100%);
  .fd-home_header {
    .size(100%, 60px);
  }
}
</style>
