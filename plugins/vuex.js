import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      category: [],
      cakes: []
    }
  },
  mutations: {
    changeCat (state, cakes) {
        state.category = cakes;
    }
  },
  actions: {
    fetchCakes(state) {
      fetch('categories.json').then(resp=>resp.json()).then(json=>{
        state.cakes = json;
      });
    }
  },
  getters: {
    getCategory(state) {
      return state.category;
    }
  }
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
})
