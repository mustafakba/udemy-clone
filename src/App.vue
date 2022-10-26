<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/shared/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
