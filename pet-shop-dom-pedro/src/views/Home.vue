<template>
  <section class="row" id="main-home-sec">
    <div class="col-sm-12">
      <h1>Painel</h1>
    </div>
    <div class="col-md-6 col-sm-12">
      <section-mkt></section-mkt>
    </div>
    <div class="col-md-6 col-sm-12">
      <section-agd></section-agd>
    </div>
    <div class="col-sm-12">
      <section-svc></section-svc>
    </div>
  </section>
</template>

<script>
import sectionAgd from '../components/section/SectionAgendamentos.vue';
import sectionMkt from '../components/section/SectionMarketPlace.vue';
import sectionSvc from '../components/section/SectionServicos.vue';

export default {
  name: 'Home',
  components: {
    'section-mkt': sectionMkt,
    'section-agd': sectionAgd,
    'section-svc': sectionSvc,
  },
};
</script>

<style lang="scss">

</style>
