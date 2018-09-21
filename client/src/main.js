// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Button, Select,
  Option, OptionGroup, Input } from 'element-ui';
// import Button from 'element-ui/lib/button';
// import Select from 'element-ui/lib/select';

/* Locale */
import elementKo from 'element-ui/lib/locale/lang/ko';
import elementEn from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import App from './App';
import router from './router';

/* CSS & SCSS */
import './styles/element-ui-base.scss';

Vue.config.productionTip = false;

locale.use(elementKo);
locale.use(elementEn);

Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Option.name, Option);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
