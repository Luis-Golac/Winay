<template>
    <app-header />
    <router-view :key="$route.path" /> 
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader, 
  },

}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>

