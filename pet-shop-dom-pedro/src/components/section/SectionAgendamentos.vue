<template>
  <section class="sections-bordered row" id="agendamento">
    <p class="title-section">Agendamento</p>
    <div class="col-md-6 col-sm-12">
      <news-agd></news-agd>
    </div>
  </section>
</template>

<script>
import newsAgd from './cards/NovosAgendamentos.vue';

export default {
  name: 'Section-agnd',
  components: {
    'news-agd': newsAgd,
  },
};
</script>
