<template>
  <div id="home" class="home">
      <div id="overlay"></div>
    <div id="form-div">
      <login-page/>
    </div>
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
