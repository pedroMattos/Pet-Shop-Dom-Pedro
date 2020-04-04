<template>
  <div id="sidebar">
    <p id="logo"><img src="../../image/pet.png" alt="Logo"></p>
    <router-link :to="{ name: 'Home' }">
      <p>Home</p>
    </router-link>
    <ul>
      <li>{{ email }}</li>
      <li id="uid-info">{{ uid }}</li>
    </ul>
    <ul id="nav">
      <router-link :to="{ name: 'MktPlace' }">
        <li>Market Place</li>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <li>Serviços</li>
      </router-link>
      <li>Feedback</li>
      <li><logout/></li>
    </ul>
  </div>
</template>

<script>
import logout from './LogoutButton.vue';

export default {
  name: 'Sidebar',
  components: {
    logout,
  },
  props: [
    'email',
    'uid',
  ],
  data() {
    return {
      email: this.email,
      uid: this.uid,
    };
  },
};
</script>

<style lang="scss">
  #sidebar {
    height: 100vh;
    background-color: #A0DFAA;
    ul {
      list-style: none;
      padding-inline-start: 10px;
      li {
        margin: 15px 0;
        font-size: 14px;
        font-weight: 600;
        transition-duration: .5s;
        &#uid-info {
          font-size: 10px;
        }
      }
      &#nav {
        a {
          color: black;
          text-decoration: none;
          transition-duration: .5s;
          &:hover {
            transition-duration: .5s;
            color: #267862;
            li {
              transition-duration: .5s;
              margin-left: 5px;
            }
          }
        }
        li {
          font-size: 16px;
        }
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
