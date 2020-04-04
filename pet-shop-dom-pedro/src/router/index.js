import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import MarketPlace from '../views/Marketplace.vue';
import Servicos from '../views/Servicos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/market-place',
    name: 'MktPlace',
    component: MarketPlace,
  },
  {
    path: '/services',
    name: 'Services',
    component: Servicos,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
