<template>
    <div class="container d-flex p-5 justify-content-center h-100">
      <div class="scope-wrapper alert alert-primary shadow w-25 text-center">
        <h4>Очки ваши: {{currentScope}}</h4>
        <h4>Очки компьютера: {{scriptScope}}</h4>
      </div>
      <div class="cards-pack" @click="getRandCard">
        <ul>
          <li 
            v-for="(card, index) in 36"
            :key="index"
            class="card"
            ref="cards"
          ></li>
        </ul>
        
      </div>
      <button 
        @click="enough" 
        type="button" 
        class="btn btn-warning font-weight-bolder mt-3 ml-3 w-25 align-self-start"
        :disabled="!disabledBtn"
      >
      Достаточно
      </button>
    </div>
</template>

<script>
export default {
  methods: {
    getRandCard() {
      if (this.$store.getters.cardSet) {
        const cards = this.$refs.cards
        const card = this.$refs.cards[this.$store.getters.cardIndex]
        this.$store.dispatch('getRandCard', {
          card, cards
        })
      } else {
        console.log('bot')
      }
    },
    enough() {
      const cards = this.$refs.cards
      const card = this.$refs.cards[this.$store.getters.cardIndex]
      this.$store.dispatch('enough', {
        card, 
        cards
      })
    }
  },
  computed: {
    card() {
      return this.$refs.cards
    },
    cards() {
      return this.$refs.cards[this.$store.getters.cardIndex]
    },
    currentScope() {
      if (this.$store.getters.currentScope > 21) {
        this.$store.dispatch('excessPoints')
      }
      return this.$store.getters.currentScope
    },
    scriptScope() {
      if (this.$store.getters.scriptScope < 21 && this.$store.getters.scriptScope !== 0) {
        setTimeout(() => {
          const cards = this.$refs.cards
          const card = this.$refs.cards[this.$store.getters.cardIndex]
          this.$store.dispatch('enough', {
            card, 
            cards
          })
        }, 1000)
      }

      return this.$store.getters.scriptScope
    },
    disabledBtn() {
      return this.$store.getters.cardSet
    }
  }
}

</script>

<style scoped>
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
    left: 0;
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