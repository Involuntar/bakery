<template>
    <div class="cakes-grid">
        <slot>
            <div class="card" v-for="(item, index) in getCategory.Items" :key="index">
                <div class="card-header">
                    <p class="new" :class="(item.New ? 'show' : '')">Новинка</p>
                    <p class="amount">{{ item.Amount }} шт</p>
                </div>
                <img :src="item.Picture" alt="" width="280px" height="320px">
                <div class="cake-props">
                    <p class="cake-name">{{ item.Name }}</p>
                    <p class="cake-price">{{ item.Price }} руб</p>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getCategory'])
    }
}
</script>

<style>

.cakes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    margin-bottom: 50px;
    justify-items: center;
    justify-content: space-evenly;
    gap: 50px 10px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 700px;
}

.cakes-grid::-webkit-scrollbar {
    width: 10px;
}

.cakes-grid::-webkit-scrollbar-track {
    background: #00000035;
    border-radius: 15px;
}

.cakes-grid::-webkit-scrollbar-track:active {
    background: #3D3D3D60;
}

.cakes-grid::-webkit-scrollbar-thumb {
    background: #3D3D3DFA;
    border-radius: 15px;
    box-shadow: inset 0 0 0 2px white;
}

.card {
    width: fit-content;
    margin-bottom: 10px;
    position: relative;
    font-family: JejuMyeongjo;
    height: 15%;
}

img {
    border-radius: 15px;
}

.cake-props {
    display: flex;
    align-content: center;
    justify-content: space-between;
}

.cake-name {
    font-weight: bold;
    font-size: 14px;
}

.cake-price {
    font-size: 14px;
}

.card-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
}

.amount {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    justify-self: flex-end;
    grid-column: 2;
    background-color: #515151FA;
    color: #FFFFFF;
    top: -35px;
    right: -30px;
    width: 70px;
    height: 70px;
    position: relative;
    border-radius: 100%;
    text-indent: 10px;
}

.new {
    display: none;
    margin-left: 10px;
}

p.show {
    display: block;
}

@media screen and (height >= 1440px) {
    .cakes-grid {
        height: 900px;
    }
}

@font-face {
    font-family: JejuMyeongjo;
    src: url("../fonts/JejuMyeongjo-Regular.ttf");
}

</style>