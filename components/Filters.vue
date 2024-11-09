<template>
  <div class="categories-mobile">
    <div class="filters">
      <button class="filters-button" :class="filtersStatus" @click="status = !status"></button>
      <div class="filters-menu" :class="filtersStatus">
        <button class="close-filters-button" @click="status = !status"></button>
        <h1 class="filters-h1">Фильтры каталога</h1>
        <div class="filters-palete">
          <button v-for="cake in cakes" class="category" @click="chooseCat(cake)">
            {{ cake.CatName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    cakes: Object
  },
  data() {
    return {
      status: false
    }
  },
  methods: {
    ...mapMutations(['changeCat']),
    chooseCat(cat) {
     this.changeCat(cat);
     this.status = false; 
    }
  },
  computed: {
    filtersStatus: function() {
      if (this.status == true) {
        return 'checked';
      } else {
        return 'unchecked';
      }
    }
  }
}
</script>

<style>
.filters {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: center no-repeat url("/public/images/Filters.svg");
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid #000;
}

.close-filters-button {
  background: center no-repeat url('/public/images/Crosshair.svg');
  width: 20px;
  height: 20px;
  border: none;
  margin: 21px 42px 0 328px;
}

.close-filters-button:hover {
  cursor: pointer;
}

.filters-h1 {
  width: 298px;
  margin: 35px auto 50px auto;
  font-size: 32px;
  font-family: JejuMyeongjo;
}

.filters-palete {
  display: grid;
  grid-template-columns: repeat(2, 161px);
  grid-template-rows: repeat(4, 120px);
  width: 322px;
  height: 479px;
  background-color: #C1AC99;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}

.category {
  width: 131px;
  height: 93px;
  border-radius: 10px;
  background-color: #C1AC99;
  border: 1px solid #796B5D;
  box-shadow: -4px -4px 4px 0 #00000040;
  color: #3D3D3DFA;
}

.category:hover {
  color: #000;
  cursor: pointer;
}

.category:nth-child(even) {
  box-shadow: 4px -4px 4px 0 #00000040;
}

.filters-button {
    width: 30px;
    height: 30px;
    opacity: 0;
    z-index: 2;
}

.filters-button.checked {
  pointer-events: none;
  cursor: inherit;
}

.filters-button:hover {
  cursor: pointer;
}

.filters-menu.checked {
  transform: translate(0, 0);
}

.filters-menu {
  position: fixed;
  top: 83px;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: #EAE2D3;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  z-index: 1;
}

@font-face {
  font-family: JejuMyeongjo;
  src: url("/fonts/JejuMyeongjo-Regular.ttf");
}
</style>