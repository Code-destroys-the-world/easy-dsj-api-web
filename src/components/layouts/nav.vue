<!--
 * @Author: hepeng
 * @Date: 2020-01-13 16:50:30
 * @LastEditTime : 2020-01-13 17:05:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easy-dsj-api-web\src\components\layouts\nav.vue
 -->
<template>
  <div class="fd-nav">
    <el-menu
      default-active="Water-ball"
      class="el-menu-vertical-demo">
      <el-submenu index="visualization">
        <template slot="title">
          <span>展示类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="waterBall" @click="routerPush('waterBall')">水波球</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--  -->
      <el-submenu index="animation">
        <template slot="title">
          <span>动画类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="diffusion" @click="routerPush('diffusion')">扩散</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--  -->
      <el-submenu index="layout">
        <template slot="title">
          <span>布局类</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {
  private routerPush(path: string) {
    this.$router.push({ name: path });
  }
}
</script>
<style lang="less">
  .fd-nav {
    width: 150px;
    height: 100%;
    overflow: auto;
    .el-menu {
      height: 100%;
    }
  }
</style>
