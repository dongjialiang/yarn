import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import BootStrapVue from 'bootstrap-vue'
import './css/bootstrap.min'
import './css/css.styl'
import './js/rem'

Vue.use(BootStrapVue);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
