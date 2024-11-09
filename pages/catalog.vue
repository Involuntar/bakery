<template>
    <div class="catalog">
        <div class="catalog-header">
            <p class="category-name">{{ getCategory.CatName }}</p>
            <p>Семейная кондитерская, создающая сбалансированные десерты на каждый день и уникальные торты по индивидуальному заказу.</p>
        </div>
        <div class="categories">
            <button v-for="(cat, index) in getCakes" :key="index" @click="chooseCat(cat)">{{ cat.CatName }}</button>
        </div>
        <Filters />
        <CakesGrid />
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';


export default {
    mounted() {
        this.fetchCakes();
    },
    methods: {
        ...mapActions(['fetchCakes']),
        ...mapMutations(['changeCat']),
        chooseCat(cat) {
            this.changeCat(cat);
        }
    },
    computed: {
        ...mapGetters(['getCakes', 'getCategory'])
    }
}
</script>

<style scoped>
.catalog-header {
    padding: 0 40px;
    height: 25vh;
    margin-bottom: 20px;
}

.category-name {
    font-size: 55px;
    font-family: JejuMyeongjo;
}

.categories {
    display: flex;
    padding-left: 10px;
    margin-bottom: 10px;
}

.categories button {
    margin-right: 15px;
    border-radius: 15px;
    width: 157px;
    height: 36px;
    background: transparent;
    border: 1px solid #A4A4A4;
    cursor: pointer;
}

.categories-mobile {
    display: none;
    padding-top: 48px;
}

.categories button:focus {
    background: #DEC9B5;
    border: 1px solid #000000;
}

.categories-mobile {
    padding-left: 34px;
    padding-bottom: 36px;
}

@media (width <= 768px) {
    .categories {
        display: none;
    }

    .catalog-header {
        padding-bottom: 50px;
    }

    .catalog-header p:nth-child(2) {
        text-align: right;
    }

    .categories-mobile {
        display: block
    }
}

@font-face {
    font-family: JejuMyeongjo;
    src: url("../fonts/JejuMyeongjo-Regular.ttf");
}

@font-face {
    font-family: Inknuit Antiqua;
    src: url("../fonts/InknutAntiqua-Black.ttf");
}
</style>