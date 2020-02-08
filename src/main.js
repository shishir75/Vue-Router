import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Task from "./components/Task";
import User from "./components/User";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

Vue.config.productionTip = false;


const router = new VueRouter({
  routes : [
    { path: '/', component: HelloWorld },
    { path: '/task', component: Task},
    { path: '/user/:id', component: User },
    { path: '*', component: NotFound }, // this should be always in the last route


  ],

  mode: 'history'

});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
