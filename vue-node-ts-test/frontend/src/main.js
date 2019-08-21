import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import routes from './routes';

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueRouter)
 
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App) 
}).$mount('#app')
