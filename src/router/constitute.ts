interface Shape {
  path?: string;
  name?: string;
  component?: string;
  children?: any;
}

const routers: Shape[] = [];
const constitute = ({
  filepages,
  componentpages,
}: {
  filepages: any;
  componentpages: any;
}) => {
  Object.keys(filepages).forEach((item: any) => {
    if (item !== 'index') {
      const childrenRouter: Shape[] = [];
      Object.keys(componentpages).forEach((item2: any) => {
        if (item2.indexOf(item) !== -1) {
          const pageName: string = item2.split('_')[1];
          childrenRouter.push({
            path: `/${item}/${pageName}`,
            name: pageName,
            component: componentpages[item2],
          });
        }
      });
      routers.push({
        path: `/${item}`,
        name: item,
        component: filepages[item],
        children: childrenRouter,
      });
    }
  });
  return routers;
};

export default constitute;
