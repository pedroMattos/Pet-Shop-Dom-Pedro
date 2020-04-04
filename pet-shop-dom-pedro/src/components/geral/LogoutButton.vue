<template>
  <p @click.prevent="logout()" id="logout">Logout</p>
</template>

<script>
export default {
  name: 'Logout-button',
  methods: {
    async logout() {
      await this.$firebase.auth().signOut();
      this.$router.push({ name: 'Login' });
      location.reload();
    },
  },
};
</script>

<style lang="scss">
  #logout {
    cursor: pointer;
    color: red;
  }
</style>
