<template>
    <div class="catalog">
        <div class="catalog-header">
            <p class="category">Осенняя коллекция</p> <p>Семейная кондитерская, создающая сбалансированные десерты на каждый день и уникальные торты по индивидуальному заказу.</p>
        </div>
        <CakesGrid />
    </div>
</template>

<script>

export default {
    data() {
        return {
            
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
    font-family: JejuMyeongjo;
}

.category {
    font-size: 55px;
    font-family: JejuMyeongjo;
}

@font-face {
    font-family: JejuMyeongjo;
    src: url("../fonts/JejuMyeongjo-Regular.ttf");
}
</style>