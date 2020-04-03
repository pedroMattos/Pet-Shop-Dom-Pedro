<template>
    <form action="" id="form-login">
      <h1>Pet Shop Dom Pedro</h1>
      <h1>login</h1>
      <h3>E-mail:</h3>
        <input type="text" v-model="email" id="email" >
      <h3>Senha:</h3>
        <input type="password" v-model="pass" id="password">
      <button class="btn btn-login" @click.prevent="login">
        <span>Entrar</span>
      </button>
      <!--<router-link class="link-sidebar" :to="{ name: 'Home' }">
        Ir para a home sem login
      </router-link>-->
      <p>Não consegue logar? 
        <router-link class="link-register" :to="{name: 'Register'}">
          Entre aqui.
        </router-link>
      </p>
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
