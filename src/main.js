import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Elementui);

Vue.config.productionTip = false
console.log(process.env.VUE_APP_SECRET);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
