import Vue from 'vue';
import Router from 'vue-router';

/* Components */
import MainFrame from '@/components/home/MainFrame';
// import Pretty from '@/components/Pretty';
import ElementTest from '@/components/ElementTest';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainFrame',
      component: MainFrame,
      children: [
        // {
        //   path: '/',
        //   name: 'Pretty',
        //   component: Pretty,
        // },
        {
          path: '/el',
          alias: '/test',
          name: 'ElementTest',
          component: ElementTest,
        },
      ],
    },
  ],
});
