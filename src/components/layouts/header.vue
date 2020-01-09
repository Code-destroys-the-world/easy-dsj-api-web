<template>
  <div class="fd-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">NPM组件</el-menu-item>
      <el-menu-item index="2">Vue模板</el-menu-item>
      <el-menu-item index="3">前端学习</el-menu-item>
      <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, namespace } from 'vuex-class';
@Component({
  name: 'headHome',
})
export default class extends Vue {
  @namespace('app').State('activeIndex') private activeIdx!: string;

  private activeIndex: string = '1';
  private handleSelect(key: string, keyPath: [] ): void {
    console.log(key, keyPath, 'active', this.activeIdx);
  }
}
</script>
<style lang="less">
  .fd-header {
    .size(100%);
  }
</style>
