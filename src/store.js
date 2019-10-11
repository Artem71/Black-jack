import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopup: false,
    cards: [
      {
        positionX: 0,
        positionY: 0,
        scope: 11
      },
      {
        positionX: 0,
        positionY: 169,
        scope: 11
      },
      {
        positionX: 0,
        positionY: 337,
        scope: 11
      },
      {
        positionX: 0,
        positionY: 505,
        scope: 11
      },
      {
        positionX: 120,
        positionY: 0,
        scope: 4
      },
      {
        positionX: 120,
        positionY: 169,
        scope: 4
      },
      {
        positionX: 120,
        positionY: 337,
        scope: 4
      },
      {
        positionX: 120,
        positionY: 505,
        scope: 4
      },
      {
        positionX: 240,
        positionY: 0,
        scope: 3
      },
      {
        positionX: 240,
        positionY: 169,
        scope: 3
      },
      {
        positionX: 240,
        positionY: 337,
        scope: 3
      },
      {
        positionX: 240,
        positionY: 505,
        scope: 3
      },
      {
        positionX: 360,
        positionY: 0,
        scope: 2
      },
      {
        positionX: 360,
        positionY: 169,
        scope: 2
      },
      {
        positionX: 360,
        positionY: 337,
        scope: 2
      },
      {
        positionX: 360,
        positionY: 505,
        scope: 2
      },
      {
        positionX: 480,
        positionY: 0,
        scope: 10
      },
      {
        positionX: 480,
        positionY: 169,
        scope: 10
      },
      {
        positionX: 480,
        positionY: 337,
        scope: 10
      },
      {
        positionX: 480,
        positionY: 505,
        scope: 10
      },
      {
        positionX: 600,
        positionY: 0,
        scope: 9
      },
      {
        positionX: 600,
        positionY: 169,
        scope: 9
      },
      {
        positionX: 600,
        positionY: 337,
        scope: 9
      },
      {
        positionX: 600,
        positionY: 505,
        scope: 9
      },
      {
        positionX: 720,
        positionY: 0,
        scope: 8
      },
      {
        positionX: 720,
        positionY: 169,
        scope: 8
      },
      {
        positionX: 720,
        positionY: 337,
        scope: 8
      },
      {
        positionX: 720,
        positionY: 505,
        scope: 8
      },
      {
        positionX: 840,
        positionY: 0,
        scope: 7
      },
      {
        positionX: 840,
        positionY: 169,
        scope: 7
      },
      {
        positionX: 840,
        positionY: 337,
        scope: 7
      },
      {
        positionX: 840,
        positionY: 505,
        scope: 7
      },
      {
        positionX: 960,
        positionY: 0,
        scope: 6
      },
      {
        positionX: 960,
        positionY: 169,
        scope: 6
      },
      {
        positionX: 960,
        positionY: 337,
        scope: 6
      },
      {
        positionX: 960,
        positionY: 505,
        scope: 6
      }
    ],
    activeCards: [],
    classes: [
      {
        class: 'card-1',
        show: false
      },
      {
        class: 'card-2',
        show: false
      },
      {
        class: 'card-3',
        show: false
      },
      {
        class: 'card-4',
        show: false
      },
      {
        class: 'card-5',
        show: false
      },
      {
        class: 'card-6',
        show: false
      },
      {
        class: 'card-7',
        show: false
      },
      {
        class: 'card-8',
        show: false
      },
      {
        class: 'card-9',
        show: false
      },
      {
        class: 'card-10',
        show: false
      },
    ],
    cardIndex: 0,
    translateX: -300,
    currentScope: 0
  },
  mutations: {
    restart(state) {
      state.showPopup = false
      state.cardIndex = 0
      state.translateX = -300
      state.activeCards = []
      let card = this.$refs
    
      for (let index in card) {
        card[index][0].classList.remove('card-active')
        card[index][0].style.backgroundPositionX = 0
        card[index][0].style.backgroundPositionY = 0
        card[index][0].style.transform = 'none'
      }
      state.currentScope = 0
    },
    getRandCard(state) {
      const rand = Math.floor(Math.random() * (state.cards.length + 1))

      if(state.activeCards.includes(rand)) {
        this.$store.commit('getRandCard')
      } else {
        state.classes[state.cardIndex].show = true
        const card = this.$refs[state.cardIndex][0]

        card.classList.add('card-active')
        card.style.backgroundPositionX = state.cards[rand].positionX + 'px'
        
        card.style.backgroundPositionY = state.cards[rand].positionY + 'px'
        card.style.transform = `translate(${state.translateX}px, 300px)`
        
        state.activeCards.push(rand)
        state.currentScope += state.cards[rand].scope
        state.cardIndex++
        state.translateX += 40
        this.$store.commit('check')
      }
    },
    check(state) {
      if (state.currentScope > 21) {
        this.$stare.commit('excessPoints')
      }
    },
    excessPoints(state) {
      state.show = true
    } 
  },
  getters: {
    showPopup(state) {
      return state.showPopup
    }
  }
})