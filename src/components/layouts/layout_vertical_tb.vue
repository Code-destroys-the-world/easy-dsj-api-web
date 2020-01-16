<!--
 * @Author: hepeng
 * @Date: 2020-01-07 16:41:26
 * @LastEditTime : 2020-01-13 17:04:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easy-dsj-api-web\src\components\layouts\index.vue
 -->
<template>
  <div class="layout_vertical_tb">
    <div class="layout_vertical__top" ref="homeHeader">
      <slot name="header"></slot>
    </div>
    <div class="layout_vertical__bottom" ref="homeContent">
      <slot name="content"></slot>
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
.layout_vertical_tb {
  .size(100%);
  .layout_vertical__top {
    .size(100%, 60px);
  }
  .layout_vertical__bottom {
    .size(100%, calc(100% - 60px));
    .flex_box();
  }
}
</style>
