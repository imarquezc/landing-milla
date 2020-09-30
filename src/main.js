import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueLazyload from 'vue-lazyload'

import Home from './views/Home'
import Terms from './views/Terms'

Vue.use(VueRouter);
Vue.use(VueLazyload)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/terminos-y-condiciones', component: Terms },
    { path: '*', component: Home }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
