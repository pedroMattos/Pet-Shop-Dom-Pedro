<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <login-page/>
  </div>
</template>

<script>
import LoginPage from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    'login-page': LoginPage,
  },
};
</script>
