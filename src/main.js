// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

/*import './assets/plugin/bootstrap.min.css'
import './assets/plugin/bootstrap'*/

import './assets/plugin/layui/css/layui.css'
import './assets/plugin/layer/layer'
import './assets/plugin/layui/layui'

import axios from 'axios';//引入文件
Vue.prototype.$http = axios;//将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
