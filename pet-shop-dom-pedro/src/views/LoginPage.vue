<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <login-page/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    'login-page': LoginPage,
  },
};
</script>
