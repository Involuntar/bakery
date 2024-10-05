<template>
    <div class="cakes-grid">
        <slot>
            <div class="card" v-for="(aut, index) in category.Items" :key="index">
                <div class="card-header">
                    <p class="new" :class="(aut.New ? 'show' : '')">Новинка</p>
                    <p class="amount">{{ aut.Amount }} шт</p>
                </div>
                <img :src="aut.Picture" alt="" width="280px" height="320px">
                <div class="cake-props">
                    <p class="cake-name">{{ aut.Name }}</p>
                    <p class="cake-price">{{ aut.Price }} руб</p>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        category: Object
    },
    data() {
        return {
            cakes: []
        }
    }, 
    // mounted() {
    //     fetch('categories.json').then(resp=>resp.json()).then(json=>{
    //         this.cakes = json;
    //     })
    // }, 
    methods: {
    }
}
</script>

<style>

.cakes-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 50px;
    justify-items: center;
    gap: 50px 10px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 375px;
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

@font-face {
    font-family: JejuMyeongjo;
    src: url("../fonts/JejuMyeongjo-Regular.ttf");
}

</style>