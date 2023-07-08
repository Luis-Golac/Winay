<template>
    <app-header /> <!-- Aquí se insertará el componente de encabezado -->
    <router-view :key="$route.path" /> <!-- Aquí se mostrará el contenido de la ruta actual -->
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader, // Registra el componente de encabezado para su uso
  },
  // Otros component options si es necesario
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>

