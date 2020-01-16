<template>
  <div class="fd-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="module">NPM组件</el-menu-item>
      <el-menu-item index="template">Vue模板</el-menu-item>
      <el-menu-item index="learn">前端学习</el-menu-item>
      <el-menu-item index="aboutus">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, namespace, Action } from 'vuex-class';

const appData = namespace('publics');

@Component({
  name: 'headHome',
})
export default class extends Vue {
  @appData.Action('getActive') public getActive!: any;
  @appData.State('activeIndex') private activeIdx!: string;
  private activeIndex: string = '';

  public created() {
    this.activeIndex = this.activeIdx;
  }

  private handleSelect(key: string, keyPath: [] ): void {
    this.getActive(key);
    this.$router.push({name: key});
  }
}
</script>
<style lang="less">
  .fd-header {
    .size(100%);
  }
</style>
