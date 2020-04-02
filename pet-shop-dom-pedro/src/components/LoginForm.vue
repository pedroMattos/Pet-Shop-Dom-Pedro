<template>
  <form action="" id="form-login">
    <input type="text" v-model="email" id="">
    <input type="password" v-model="pass" id="">
    <button class="btn btn-login" @click.prevent="login">
      <span>Entrar</span>
    </button>
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
