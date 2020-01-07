<template>
  <div class="fd-index">
    <layoutHome>

    </layoutHome>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import layoutHome from '../components/layouts/index.vue';

@Component({
  components: {
    layoutHome,
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