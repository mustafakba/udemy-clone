import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueTailwind from 'vue-tailwind'

Vue.config.productionTip = false
Vue.use(VueTailwind)
new Vue({

  render: h => h(App),
}).$mount('#app')

