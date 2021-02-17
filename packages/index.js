import List from './List';

const components = [
  List,
];

const install = function (Vue) {
  components.map(component => {
    Vue.use(component);
  });
}

export {
  install,
  List
};

export default {
  install
};
