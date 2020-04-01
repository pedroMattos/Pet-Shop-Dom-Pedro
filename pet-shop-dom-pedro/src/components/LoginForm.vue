<template>
  <form action="" id="form-login">
    <input type="text" v-model="email" id="">
    <input type="password" v-model="pass" id="">
    <input type="submit" @click.prevent="login" value="Entrar">
    <router-link class="link-sidebar" :to="{ name: 'Home' }">
      Ir para a home sem login
    </router-link>
  </form>
</template>

<script>
export default {
  name: 'FormLogin',

  data() {
    return {
      email: null,
      pass: null,
    };
  },
  methods: {
    login() {
      alert('Fazer logica de login');
    },
  },
};
</script>

<style lang="scss">
</style>
