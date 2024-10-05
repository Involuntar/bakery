<template>
    <div class="header">
        <div>
            <h3><NuxtLink to="/">Biskvitnyy Dvor</NuxtLink></h3>
        </div>
        <div>
            <nav>
                <p><NuxtLink to="/catalog">Каталог</NuxtLink></p>
                <p><NuxtLink to="/about">О нас</NuxtLink></p>
                <p><NuxtLink to="/corporateclients">Корпоративным клиентам</NuxtLink></p>
            </nav>
        </div>
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
    background-color: #EAE2D3;
    margin: 0;
    height: 112px;
    justify-content: space-between;
    padding: 0 50px;
}

.header div {
    width: 33%;
}

nav {
    display: flex;
    justify-content: center;
}

nav p {
    margin: 10px;
    font-size: 16px;
    font-family: "Inknut Antiqua";
}

nav a:focus {
    text-decoration: underline;
}

.language-toggle {
    text-align: right;
}

.language-toggle button {
    font-size: 14px;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    border-radius: 15px;
    text-align: center;
    vertical-align: middle;
    background: transparent;
    font-family: "Inknut Antiqua";
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
}

@font-face {
    font-family: Inknut Antiqua;
    src: url("../fonts/InknutAntiqua-Black.ttf");
}
</style>