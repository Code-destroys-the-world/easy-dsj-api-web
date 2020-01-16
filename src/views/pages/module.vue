
<template>
  <div class="fd-module">
    <layoutDiv>
      <navDiv slot="left"></navDiv>
      <router-view slot="right"></router-view>
    </layoutDiv>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import layoutDiv from '../../components/layouts/layout_vertical_lr.vue';
import navDiv from '../../components/layouts/nav.vue';
@Component({
  components: {
    layoutDiv,
    navDiv,
  },
})
export default class extends Vue {}

</script>
<style lang="less">
  .fd-module {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
</style>