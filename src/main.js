import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/style.css'


Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);
Vue.component('SeoText', require('./components/SeoText.vue').default);
Vue.component('Popular', require('./components/Popular.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
