<template>
    <div class="catalog">
        <div class="catalog-header">
            <p class="category">{{ catHeader }}</p>
            <p>Семейная кондитерская, создающая сбалансированные десерты на каждый день и уникальные торты по индивидуальному заказу.</p>
        </div>
        <div class="categories">
            <button v-for="(cat, index) in cakes" :key="index" @click="chooseCat(cat)">{{ cat.CatName }}</button>
        </div>
        <div class="categories-mobile">
            <button class="filters"></button>
        </div>
        <CakesGrid :category="choosenCat" />
    </div>
</template>

<script>

export default {
    data() {
        return {
            cakes: [],
            choosenCat: [],
            catHeader: ''
        }
    },
    mounted() {
        fetch('categories.json').then(resp=>resp.json()).then(json=>{
            this.cakes = json;
            this.catHeader = json.autumn.CatName;
            this.choosenCat = json.autumn;
            console.log(json);
        })

    },
    methods: {
        chooseCat(cat) {
            this.choosenCat = cat;
            this.catHeader = cat.CatName;
            console.log(this.choosenCat);
        }
    }
}
</script>

<style scoped>
.catalog-header {
    padding: 0 40px;
    height: 25vh;
    margin-bottom: 20px;
}

.category {
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

.filters {
    width: 30px;
    height: 30px;
    background: center no-repeat url("/public/images/Filters.svg");
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid #000;
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