// Import libs
import Vue from 'vue';
import VueLoading from 'vue-loading-overlay';
import Toast from 'vue-toastification';

// Import local files
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import store from './store';
import moment from './mixins/moment';
import theme from './mixins/theme';

Vue.config.productionTip = false;

Vue.use(VueLoading);
Vue.use(Toast);

Vue.mixin(moment);
Vue.mixin(theme);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
