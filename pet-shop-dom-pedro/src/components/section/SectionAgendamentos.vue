<template>
  <section class="sections-bordered row" id="agendamento">
    <p class="title-section">Agendamento</p>
    <div class="col-md-6 col-sm-12">
      <news-agd></news-agd>
    </div>
    <div class="col-md-6 col-sm-12">
      <all-agd></all-agd>
    </div>
  </section>
</template>

<script>
import allAgd from './cards/AgdHoje.vue';
import newsAgd from './cards/NovosAgendamentos.vue';

export default {
  name: 'Section-agnd',
  components: {
    'news-agd': newsAgd,
    'all-agd': allAgd,
  },
};
</script>
