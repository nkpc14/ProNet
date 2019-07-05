import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://nexuspro.herokuapp.com';
axios.defaults.headers = 'Authorization'
Vue.config.productionTip = false
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
