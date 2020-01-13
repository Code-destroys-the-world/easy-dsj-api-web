<template>
  <div class="fd-index">
    <layoutHome :header-height="80">
      <headerDiv slot="header"></headerDiv>
    </layoutHome>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import layoutHome from '../components/layouts/index.vue';
import headerDiv from '../components/layouts/header.vue';

@Component({
  components: {
    layoutHome,
    headerDiv,
  },
})
export default class App extends Vue {

}
</script>
<style lang="less">
  .fd-index {
    .size(100%);
  }
</style>