<template>
  <div class="fd-modules__components_content">
    <api-title>
      <h2>水波球</h2>
      <p>展示类: 按照百分比定义的水波球组件</p>
    </api-title>
    <api-code>
      <template slot="exhibition">
        <dsj-waterBall
          :data="postData"
          :titleSold='true'
          :suffix='"分"'
          :Subheading="'我是副标题'"
          :score='score'
          :color='bollColor'
          :distance='distance'/>
        <h3></h3>
        <el-input type="text" v-model="score"></el-input>
      </template>
      <template slot="code">
        {{codeText}}
      </template>
    </api-code>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {
  private bollColor: any[] = [{
    to: 'rgba(254,200,85, 1)',
    from: 'rgba(255,202,87, 0.2)',
  }, {
    to: 'rgba(254,200,85, 0.6)',
    from: 'rgba(255,202,87, 0.2)',
  }];
  private distance: any = {
    w: 155,
    h: 155,
  };
  private postData: string | number = '977';
  private score: string | number = '50%';
  private codeText: string = `<template>
            <dsj-waterBall
              :titleSold='true'
              :suffix='"分"'
              :Subheading="'我是副标题'"
              :score='score'
              :color='bollColor'
              :data="data"
              :distance='distance'/>
          </template>
          <script>
            export default {
              data() {
                return {
                  score: 70%,
                  color: [{
                    to: 'rgba(254,200,85, 1)',
                    from: 'rgba(255,202,87, 0.2)',
                  }, {
                    to: 'rgba(254,200,85, 0.6)',
                    from: 'rgba(255,202,87, 0.2)',
                  }],
                  data: 977
                }
              }
            }
          <\/script>`;
}
</script>