<template>
    <div class="cardgrid">
        <slot>
            <div class="card">
                <div class="cardheader">
                    <p class="amount">{{}} шт</p>
                </div>
                <img :src="item.Picture" alt="" width="280px" height="320px">
                <div class="cardinfo">
                    <p class="position-name">{{}}</p>
                    <p class="position-price">от {{}} руб</p>
                </div>
            </div>
        </slot>
    </div>
</template>
<style>
</style>