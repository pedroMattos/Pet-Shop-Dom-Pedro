<template>
  <div id="home" class="home">
      <div id="overlay"></div>
    <div id="form-div">
      <login-page/>
    </div>
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
