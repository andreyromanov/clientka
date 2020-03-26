import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
//import '@fortawesome/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);
Vue.component('SeoText', require('./components/SeoText.vue').default);
Vue.component('Popular', require('./components/Popular.vue').default);
Vue.component('MainSlider', require('./components/MainSlider.vue').default);
Vue.component('Reccomendations', require('./components/Reccomendations.vue').default);

Vue.component('Catalog', require('./components/catalog/Catalog.vue').default);
Vue.component('Textile', require('./components/catalog/Textile.vue').default);


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");