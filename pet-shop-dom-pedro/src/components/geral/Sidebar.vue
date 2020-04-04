<template>
  <div id="sidebar">
    <p>Sou a sidebar :P</p>
    <logout/>
  </div>
</template>

<script>
import logout from './LogoutButton.vue';

export default {
  name: 'Sidebar',
  components: {
    logout,
  },
};
</script>

<style lang="scss">
  #sidebar {
    height: 100vh;
    background-color: #A0DFAA;
    p {
      margin: 0;
    }
  }
</style>
