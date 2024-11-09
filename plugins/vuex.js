import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      category: [],
      cakes: {}
    }
  },
  mutations: {
    changeCat (state, cat) {
      state.category = cat;
    },
    fetchingCakes(state, cakes) {
      state.cakes = cakes;
    }
  },
  actions: {
    fetchCakes({commit}) {
      fetch('categories.json').then(resp=>resp.json()).then(json=>{
        commit('fetchingCakes', json);
        commit('changeCat', json.autumn);
      });
    }
  },
  getters: {
    getCategory(state) {
      return state.category;
    },
    getCakes(state) {
      return state.cakes;
    }
  }
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
})
