<template>
    <div class="catalog">
        <div class="catalog-header">
            <p class="category">Осенняя коллекция</p> <p>Семейная кондитерская, создающая сбалансированные десерты на каждый день и уникальные торты по индивидуальному заказу.</p>
        </div>
        <div class="categories">
            <button v-for="(cat, index) in cakes" :key="index" @click="chooseCat(cat)">{{ cat.CatName }}</button>
        </div>
        <CakesGrid :category="choosenCat" />
    </div>
</template>

<script>

export default {
    data() {
        return {
            cakes: [],
            choosenCat: []
        }
    },
    mounted() {
        fetch('categories.json').then(resp=>resp.json()).then(json=>{
            this.cakes = json;
        })
    },
    methods: {
        chooseCat(cat) {
            this.choosenCat = cat;
            console.log(this.choosenCat);
        }
    }
}
</script>

<style>
.catalog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 25vh;
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

.categories button:focus {
    background: #DEC9B5;
    border: 1px solid #000000;
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