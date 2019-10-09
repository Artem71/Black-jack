<template>
    <div class="container">
      <transition-group>
        <img
          v-for="(card, index) in cards"
          :key="card.scope"
          :src="card.show ? card.src : 'img/close.jpg'" 
          :class="{move: card.show}"
          :alt="card.name"
          @click="show(index)"
        >
      </transition-group>
    </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        name: '6 spades',
        src: 'img/6-spades.jpg',
        scope: 6,
        show: false
      },
      {
        name: '7 spades',
        src: 'img/7-spades.jpg',
        scope: 7,
        show: false
      },
      {
        name: '8 spades',
        src: 'img/8-spades.jpg',
        scope: 8,
        show: false
      },
      {
        name: '9 spades',
        src: 'img/9-spades.jpg',
        scope: 9,
        show: false
      },
      {
        name: '10 spades',
        src: 'img/10-spades.jpg',
        scope: 10,
        show: false
      },
      {
        name: 'jack spades',
        src: 'img/jack-spades.jpg',
        scope: 2,
        show: false
      },
      {
        name: 'queen spades',
        src: 'img/queen-spades.jpg',
        scope: 3,
        show: false
      },
      {
        name: 'king spades',
        src: 'img/king-spades.jpg',
        scope: 4,
        show: false
      },
      {
        name: 'ace spades',
        src: 'img/ace-spades.jpg',
        scope: 11,
        show: false
      },
    ]
  }),
  methods: {
    show(index) {
      this.cards[index].show = !this.cards[index].show
    }
  }
}
</script>

<style scoped>
  img {
    margin: 10px;
    max-width: 100px;
    max-height: 125px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 1s
  }
  .move {
    transform: translateX(100px) translateY(100px)
  }
</style>