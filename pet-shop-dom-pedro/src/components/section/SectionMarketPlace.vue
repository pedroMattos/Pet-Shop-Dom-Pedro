<template>
  <section class="row sections-bordered" id="marketplace">
    <p class="title-section">Market Place</p>
    <div class="col-md-6 col-sm-12">
      <sales-card></sales-card>
    </div>
    <div class="col-md-6 col-sm-12">
      <estoque-card></estoque-card>
    </div>
  </section>
</template>

<script>
import estoqueCard from './cards/Estoque.vue';
import salesCard from './cards/Vendas.vue';

export default {
  name: 'Sec-Markt',
  components: {
    'sales-card': salesCard,
    'estoque-card': estoqueCard,
  },
};
</script>

<style lang="scss">

</style>
