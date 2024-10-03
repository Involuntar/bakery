<template>
    <div class="header">
        <h3>Biskvitnyy Dvor</h3> 
        <ul>
            <li><NuxtLink to="/catalog">Каталог</NuxtLink></li>
            <li><NuxtLink to="/about">О нас</NuxtLink></li>
            <li><NuxtLink to="/corporateclients">Корпоративным клиентам</NuxtLink></li>
        </ul>
        <div class="language-toggle">
            <button>Ru</button>
        </div>
    </div>
</template>

<style>
.header {
    display: flex;
    align-items: center;
    background: linear-gradient(#00000026 67.07%, #66666608 96.54%);
    margin: 0;
    height: 112px;
    justify-content: space-between;
}

ul {
    list-style-type: none;
    display: flex;
    width: fit-content;
    padding: 0;
}

li {
    margin: 10px;
    font-size: 18px;
}

.language-toggle button {
    font-size: 18px;
    border: 1px solid black;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    width: 60px;
    margin-right: 50px;
    text-align: center;
    vertical-align: middle;
    background: transparent;
}

.language-toggle button:hover {
    background: linear-gradient(#66666608 67.07%, #00000026 96.54%);
    cursor: pointer;
}

.language-toggle button:active {
    background: linear-gradient(#66666616 67.07%, #00000052 96.54%);
    box-shadow: inset 0 0 5px 1px black, 0 0 10px 3px white;
    color: white;
}

a {
    color: black;
    text-decoration: none;
}

h3 {
    font-family: "Inknut Antiqua";
    font-size: 18px;
    text-align: left;
}

@font-face {
    font-family: Inknut Antiqua;
    src: url("../fonts/InknutAntiqua-Black.ttf");
}
</style>