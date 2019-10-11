<template>
    <div class="container ">
      <div class="scope-wrapper">
        <h1>Очки: {{currentScope}}</h1>
      </div>
      <div class="cards-pack" @click="getRandCard">
        <ul>
          <li 
            v-for="(card, index) in 10"
            :key="index"
            class="card"
            ref="cards"
          ></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    getRandCard() {
      const cards = this.$refs.cards
      const card = this.$refs.cards[this.$store.getters.cardIndex]
      this.$store.dispatch('getRandCard', {
        card, cards
      })
    }
  },
  computed: {
    currentScope() {
      if (this.$store.getters.currentScope > 21) {
        this.$store.dispatch('excessPoints')
      }
      return this.$store.getters.currentScope
    }
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    padding: 50px;
    min-height: 90vh;
  }

  .cards-pack {
    background-image: url(../assets/pack.png);
    background-position: center;
    display: inline-block;
    width: 150px;
    height: 195px;
    cursor: pointer;
  }

  .sprite-wrapper {
    position: relative;
    background-image: url(../assets/Cards.png);
    width: 121px;
    height: 169px;
  }

  ul {
    position: relative;
    margin-top: 21px;
    margin-left: 30px;
    list-style: none;
    max-height: 169px;
  }

  .card {
    position: absolute;
    display: block;
    opacity: 0;
    background-image: url(../assets/Cards.png);
    width: 121px;
    height: 169px;
    transition: transform .5s
  }

  .card-active {
    opacity: 1
  }

  .scope-wrapper {
    position: absolute;
    left: 150px;
    top: 150px;
  }

</style>