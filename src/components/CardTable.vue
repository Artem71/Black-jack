<template>
  <div class="card-table">
    <Cards />
  </div>
</template>

<script>
import Cards from './Cards'

export default {
  components: {
    Cards
  }
}
</script>

<style scoped>
  .card-table {
    background-image: url('..//assets/background.jpg');
    min-height: 100vh;
  }
</style>