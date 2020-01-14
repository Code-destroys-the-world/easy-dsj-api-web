const files = require.context('../views/pages', false, /\.vue$/);
const fileComponent = require.context('../components/pages', false, /\.vue$/);
const filepages: any = {};
const componentpages: any = {};
files.keys().forEach((key: any) => {
  filepages[key.replace(/(\.\/|\.vue)/g, '')] = files(key);
});
fileComponent.keys().forEach((key: any) => {
  componentpages[key.replace(/(\.\/|\.vue)/g, '')] = fileComponent(key).default;
});
export default { filepages, componentpages };
