<template>
    <div class="catalog">
        <div class="catalog-header">
            <p class="category-name">{{ getCategory.CatName }}</p>
            <p>Семейная кондитерская, создающая сбалансированные десерты на каждый день <br>
                и уникальные торты по индивидуальному заказу.</p>
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
.catalog {
    max-width: 1200px;
    margin: 0 auto;
}

.catalog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    margin: 0px auto 40px auto;
    max-width: 1200px;
}

.catalog-header p:nth-child(2) {
    font-size: 16px;
    text-align: right;
}

.category-name {
    font-size: 45px;
    font-family: JejuMyeongjo;
}

.categories {
    display: flex;
    padding-left: 10px;
    margin-bottom: 40px;
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
        display: block;
    }

    .catalog-header p:nth-child(2) {
        text-align: right;
    }

    .categories-mobile {
        display: block
    }
}

@media screen and (width >= 2000) {
    .category-name {
        font-size: 85px;
    }

    .catalog-header p:nth-child(2) {
        font-size: 65px;
        margin-bottom: 0;
    }

    .catalog-header {
        margin-bottom: 0;
        height: fit-content;
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