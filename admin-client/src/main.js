import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
