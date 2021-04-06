import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/Main";


Vue.use(Router)

export default new Router({
  route: [
    {
      name: '/main',
      component: Main
    }
  ]
  });
