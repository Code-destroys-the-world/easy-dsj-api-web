<!--
 * @Author: your name
 * @Date: 2020-01-07 14:58:39
 * @LastEditTime: 2020-01-13 17:01:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \easy-dsj-api-web\src\views\index.vue
 -->
<template>
  <div class="fd-index">
    <layoutHome :header-height="80">
      <headerDiv slot="header"></headerDiv>
      <router-view slot="content"></router-view>
    </layoutHome>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import layoutHome from '../components/layouts/layout_vertical_tb.vue';
import headerDiv from '../components/layouts/header.vue';

@Component({
  components: {
    layoutHome,
    headerDiv,
  },
})
export default class App extends Vue {}
</script>
<style lang="less">
  .fd-index {
    .size(100%);
  }
</style>