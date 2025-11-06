<template>
  <div>
    <h1 v-if="title">{{ title }}</h1>
    <p v-else>Chargement...</p>
  </div>
</template>

<script>
import api from '../services/api';

/**
 * Component to display a greeting message.
 */
export default {
  name: 'HelloTitle',
  data() {
    return {
      title: '', // Stocke le titre récupéré
    };
  },
  async created() {
    try {
      // Appel à l'API pour récupérer le titre
      const response = await api.getHello();
      console.log(response);
      this.title = response.data || response; // Mettez à jour la propriété avec le résultat
    } catch (error) {
      console.error('Erreur lors de la récupération du titre :', error);
    }
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>
