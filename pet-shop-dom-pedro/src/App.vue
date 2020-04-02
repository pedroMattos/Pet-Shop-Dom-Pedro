<template>
  <div id="app">
    <section class="row">
      <div class="col-md-2">
        <sidebar/>
      </div>
      <div class="col-md-10">
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
  mounted() {
    console.log(this.$firebase);
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
