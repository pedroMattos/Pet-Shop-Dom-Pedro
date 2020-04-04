<template>
  <div id="sidebar">
    <p id="logo"><img src="../../image/pet.png" alt="Logo"></p>
    <router-link :to="{ name: 'Home' }">
      <p>Home</p>
    </router-link>
    <ul>
      <router-link :to="{ name: 'MktPlace' }">
        <li>Market Place</li>
      </router-link>
      <li>Agenda</li>
      <li>Serviços</li>
      <li>Feedback</li>
    </ul>
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
    ul {
      list-style: none;
      padding-inline-start: 0;
      li {
        margin: 5px 0;
        font-size: 14px;
      }
    }
    p {
      margin: 0;
    }
    img {
      margin-top: 20px;
      width: 70px;
      height: 70px;
    }
    #logo {
      text-align: center;
    }
  }
</style>
