<template>
  <div class="container">
    <div class="wrapper alert alert-success">
      <h4 class="alert-heading mb-5">{{popupMsg}}</h4>
      <button class="btn btn-success btn-lg btn-block" @click="restart">Еще раз</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    restart() {
      this.$store.dispatch('restart')
    }
  },
  computed: {
    popupMsg() {
      return this.$store.getters.popupMsg
    }
  }
}
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .wrapper {
    margin: 10% auto;
    padding: 20px;
    border: 1px solid black;
    width: 500px;
  }

</style>