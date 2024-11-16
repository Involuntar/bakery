import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      category: null
    }
  },
  mutations: {
    changeCat (state, cakes) {
        state.category = cakes;
    }
  },
  actions: {},
  getters: {
    getCategory(state) {
      return state.category;
    }
  }
})

const app = createApp({ app })

// Install the store instance as a plugin
app.use(store)