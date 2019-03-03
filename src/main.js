// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n'
import messages from './locales'
import 'element-ui/lib/theme-chalk/index.css';
import VueMasonry from 'vue-masonry-css'
import * as VueGoogleMaps from "vue2-google-maps";
var VueScrollTo = require('vue-scrollto');

Vue.use(VueMasonry)
Vue.use(VueScrollTo)
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDmHLY35hECBge0E59laEFXvx9hrnQqHq8",
    libraries: "places" // necessary for places input
  }
});

const i18n = new VueI18n({
  locale: 'th', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
