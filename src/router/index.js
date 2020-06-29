import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  
    // {
    //   path: '/',
    //   name: '/',
    //   component: (resolve) => require(['@/components/pages/hom'], resolve),
    // },
    {
      path: '/',
      name: '/',
      component: (resolve) => require(['@/components/pages/header/header.vue'], resolve),
      children: [{
        path: '/',
        name: 'shouye',
        component: (resolve) => require(['@/components/pages/shouye/index'], resolve),
      },
      {
        path: '/header02',
        name: 'header02',
        component: (resolve) => require(['@/components/pages/header02/header-word'], resolve),
      },
      {
        path: '/team',
        name: 'team',
        component: (resolve) => require(['@/components/pages/team/team'], resolve),
      },
      {
        path: '/business',
        name: 'business',
        component: (resolve) => require(['@/components/pages/business/business01'], resolve),
      },
      {
        path: '/details',
        name: 'details',
        component: (resolve) => require(['@/components/pages/details/xiangqing'], resolve),
      },
    ]

    },
  ]
});

export default router;
