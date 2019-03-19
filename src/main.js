import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Detail from "./components/detail/Detail.vue";
import Home from "./components/home/Home.vue";

import App from "./App.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
 { name: "detail", path: "/detail", component: Detail, props: true }
 
];

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
