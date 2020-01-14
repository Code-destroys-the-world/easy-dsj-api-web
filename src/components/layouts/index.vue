<!--
 * @Author: hepeng
 * @Date: 2020-01-07 16:41:26
 * @LastEditTime : 2020-01-13 17:04:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easy-dsj-api-web\src\components\layouts\index.vue
 -->
<template>
  <div class="fd-home_layout">
    <div class="fd-home_header" ref="homeHeader">
      <slot name="header"></slot>
    </div>
    <div class="fd-home_content" ref="homeContent">
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
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'home_layout',
})
export default class LayoutHome extends Vue {
  @Prop({default: 60}) private headerHeight!: string | number;

  private mounted() {
    if (Number(this.headerHeight) !== 60) {
      (this.$refs.homeHeader as HTMLElement).style.height = `${this.headerHeight}px`;
      (this.$refs.homeContent as HTMLElement).style.height = `calc(100% - ${this.headerHeight}px)`;
    }
  }
}
</script>
<style lang="less">
.fd-home_layout {
  .size(100%);
  .fd-home_header {
    .size(100%, 60px);
  }
  .fd-home_content {
    .size(100%, calc(100% - 60px));
    .flex_box();
    .fd--home_nav {
      min-width: 100px;
      height: 100%;
    }
    .fd--home_content {
      .flex_1();
      height: 100%;
    }
  }
}
</style>
