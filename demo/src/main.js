// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
var VueResource = require('vue-resource');
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
// import Axios from "axios";
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
// import './assets/less/all'
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false
//在main.js中定义一个全局函数
// 得到配置数据
function toplistdata() {
  console.log(toplist)
  Vue.prototype.$toplist = toplist;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
