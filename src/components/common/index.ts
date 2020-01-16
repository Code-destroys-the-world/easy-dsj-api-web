import Vue from 'vue';
const commonComponentsContext = require.context('./', true, /\.vue$/);

commonComponentsContext.keys().forEach((key: any) => {
  const ctrl = commonComponentsContext(key).default || commonComponentsContext(key);
  Vue.component(`api-${key.replace(/(\.\/|\.vue)/g, '')}`, ctrl);
});
