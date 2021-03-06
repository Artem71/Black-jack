
export default {
  state: {
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
    cardIndex: 0,
    showCard: [
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false}
    ],
    currentScope: 0,
    scriptScope: 0,
    translateX: -300,
    rand: Math.floor(Math.random() * 35),
    refCards: null,
    showPopup: false,
    cardSet: true,
    popupMsg: 'У вас перебор очков!'
  },
  mutations: {
    getRandCard(state, payload) {
      state.showCard[state.cardIndex].show = true
      state.refCards = payload.cards

      payload.card.classList.add('card-active')
      payload.card.style.backgroundPositionX = state.cards[state.rand].positionX + 'px'
      payload.card.style.backgroundPositionY = state.cards[state.rand].positionY + 'px'
      payload.card.style.transform = `translate(${state.translateX}px, 300px)`
      
      state.activeCards.push(state.rand)
      state.currentScope += state.cards[state.rand].scope
      state.cardIndex++
      state.translateX += 40
    },
    getRandIndex(state) {
      state.rand = Math.floor(Math.random() * (state.cards.length))
    },
    enough(state, payload) {
      state.cardSet = false
      if (state.scriptScope + state.cards[state.rand].scope >= 21) {
        state.scriptScope > state.currentScope ? 
          state.popupMsg = 'Вы проиграли!' :
          state.popupMsg = 'Вы выграли!'
        if (state.scriptScope == state.currentScope) state.popupMsg = 'Ничья!'
        state.showPopup = true
        return
      }
      state.showCard[state.cardIndex].show = true
      state.refCards = payload.cards || state.refCards

      payload.cards[state.cardIndex].classList.add('card-active')
      payload.cards[state.cardIndex].style.backgroundPositionX = state.cards[state.rand].positionX + 'px'
      payload.cards[state.cardIndex].style.backgroundPositionY = state.cards[state.rand].positionY + 'px'
      payload.cards[state.cardIndex].style.transform = `translate(${state.translateX + 400}px, 300px)`
      
      state.activeCards.push(state.rand)
      state.scriptScope += state.cards[state.rand].scope
      state.cardIndex++
      state.translateX += 40
    },
    excessPoints(state) {
      state.popupMsg = 'У вас перебор очков!'
      state.showPopup = true
    },
    restart(state) {
      state.showPopup = false
      state.currentScope =  0
      state.scriptScope = 0
      state.translateX = -300
      state.activeCards = [],
      state.cardIndex = 0
      state.cardSet = true
      
      state.showCard.forEach(c => {
        c.show = false
      })

      state.refCards.forEach(card => {
        card.classList.remove('card-active')
        card.style.backgroundPositionX = 0
        card.style.backgroundPositionY = 0
        card.style.transform = 'none'
      })

      state.currentScope = 0
    }
  },
  actions: {
    getRandCard({commit, state}, card) {
      if(state.activeCards.includes(state.rand)) {
        commit('getRandIndex')
        commit('getRandCard', card)
      } else {
        commit('getRandCard', card)
      }
    },
    restart({commit}) {
      commit('restart')
    },
    excessPoints({commit}) {
      commit('excessPoints')
    },
    enough({commit, state}, card) {
      if(state.activeCards.includes(state.rand)) {
        commit('getRandIndex')
        commit('enough', card)
      } else {
        commit('enough', card)
      }
    }
  },
  getters: {
    cardIndex: state => state.cardIndex,
    currentScope: state => state.currentScope,
    scriptScope: state => state.scriptScope,
    rand: state => state.rand,
    showPopup: state => state.showPopup,
    cardSet: state => state.cardSet,
    popupMsg: state => state.popupMsg
  }
}
