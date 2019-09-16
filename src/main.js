import Vue from 'vue'
import App from './App'
import router from './router'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/funnel')
require('echarts/lib/chart/pie')
Vue.prototype.$echarts = echarts
import './style/index.scss'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
