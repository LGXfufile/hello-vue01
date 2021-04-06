import Vue from 'vue'
import App from './App'
// 扫描路由
import router from './router'
// 导入ElementUi
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 安装路由
Vue.use(router)
Vue.use(ElementUi)

new Vue({
  el: '#app',
  //配置路由
  router,
  render: h => h(App) //根据官网文档来的
})
