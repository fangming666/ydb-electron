import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'examList',
      component: require('@/pages/examList/examList').default
    },
    {
      path: '/webView',
      name: 'webView',
      component: require('@/pages/webView/webView').default
    },
    {
      path: '/addReport',
      name: 'addReport',
      component: require('@/pages/addReport/addReport').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
