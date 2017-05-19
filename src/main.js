'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';
import Contact from './Contact.vue';
import Restaurants from './Restaurants.vue';
import RecommendedRestaurant from './RecommendedRestaurant.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/restaurants', component: Restaurants },
  { path: '/recommended-restaurants/:id', name: 'recommended-restaurant', component: RecommendedRestaurant }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('restaurants', Restaurants);
Vue.component('recommendedRestaurant', RecommendedRestaurant);
Vue.component('contact', Contact);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
