<template>
  <div id="app">
    <section class="row">
      <div style="transition-duration:.5s" :class="[classeSide]">
        <sidebar v-if="uid"/>
      </div>
      <div style="transition-duration:.5s" :class="[classeView, 'col-sm-12']">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import sidebar from './components/geral/Sidebar.vue';

export default {
  components: {
    sidebar,
  },
  data() {
    return {
      uid: window.uid,
      classeView: 'col-md-12',
      classeSide: null,
    };
  },
  mounted() {
    const context = this;
    this.$firebase.auth().onAuthStateChanged((user) => {
      // se user.uid não estiver vazio, loga, senao nulo
      window.uid = user ? user.uid : null;
      context.uid = window.uid;
      if(window.uid) {
        context.classeView = 'col-md-10';
        context.classeSide = 'col-md-2';
      } else {
        this.$route.push({ name: 'Login' });
      }
    });
  },
};
</script>

<style lang="scss">
  #app {
    .row {
      margin-right: 0;
    }
  }
</style>
