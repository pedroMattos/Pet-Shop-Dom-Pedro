import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';

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
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
