import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  ECharts from 'vue-echarts'
import store from './store'

Vue.use(Elementui);
Vue.use(ECharts);

Vue.config.productionTip = false
console.log(process.env.VUE_APP_SECRET);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
