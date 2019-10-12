<template>
  <div class="card-table">
    <Cards />
    
    <Popup v-if="showPopup" />
  </div>
</template>

<script>
import Cards from './Cards'
import Popup from './Popup'

export default {
  data: () => ({
  }),
  computed: {
    showPopup() {
      return this.$store.getters.showPopup
    }
  },
  components: {
    Cards, Popup
  }
}
</script>

<style scoped>
  .card-table {
    position: relative;
    background-image: url('../assets/background.jpg');
    min-height: 100vh;
  }
</style>