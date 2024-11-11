<template>
    <div class="main-header">
        <div class="header">
            <div>
                <h3>
                    <NuxtLink to="/">Biskvitnyy Dvor</NuxtLink>
                </h3>
            </div>
            <div class="pages">
                <nav>
                    <p>
                        <NuxtLink to="/catalog" class="">Каталог</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="/about">О нас</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="/corporateclients">Корпоративным клиентам</NuxtLink>
                    </p>
                </nav>
            </div>
            <div class="language-toggle">
                <button>Ru</button>
            </div>
            <div class="pages-hamburger">
                <input type="checkbox">

                <span></span>
                <span></span>
                <span></span>

                <ul class="menu">
                    <li class="language-toggle-mobile">
                        <button>Ru</button>
                    </li>
                    <li>
                        <NuxtLink to="/catalog" class="">Каталог</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">О нас</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/corporateclients">Корпоративным клиентам</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.main-header {
    background: linear-gradient(#00000026 67.07%, #66666608 96.54%);
    background-color: #EAE2D3;
}

.header {
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 83px;
    justify-content: space-between;
    padding: 0 50px;
    max-width: 1200px;
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

.language-toggle button,
.menu button {
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

.menu button {
    border: 1px solid #EAE2D3;
    color: #EAE2D3;
}

.language-toggle button:hover,
.menu button:hover {
    background: linear-gradient(#66666608 67.07%, #00000026 96.54%);
    cursor: pointer;
}

.language-toggle button:active,
.menu button:active {
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
    width: 100%;
}

.pages-hamburger {
    display: none;
}

.pages-hamburger input {
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 0;
    z-index: 3;
    display: block;
    right: 15px;
    opacity: 0;
}

.menu {
    position: fixed;
    top: 0;
    margin: 0;
    list-style: none;
    height: 100%;
    width: 100%;
    padding: 50px;
    padding-top: 100px;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    z-index: 1;
    background: #515151FA;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    overflow-x: hidden;
}

.menu li:nth-child(1) {
    margin-bottom: 50px;
}

.menu li {
    padding: 15px 34px;
    font-size: 24px;
}

.language-toggle-mobile {
    position: absolute;
    top: 10px;
}

.menu a {
    color: #EAE2D3;
}

.pages-hamburger input:checked~ul {
    transform: translate(-55%, 0);
}

.pages-hamburger input:checked~span {
    opacity: 1;
    transform: rotate(-45deg) translate(2px, -5px);
    background: white;
}

.pages-hamburger input:checked~span:nth-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

.pages-hamburger input:checked~span:nth-child(4) {
    transform: rotate(45deg) translate(1px, 0);
}

.pages-hamburger span {
    position: relative;
    width: 33px;
    height: 4px;
    background: #403e3a;
    display: block;
    margin-bottom: 5px;
    left: 100%;
    border-radius: 5px;

    transform-origin: 100% 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

    z-index: 2;
}

@media screen and (width <=768px) {
    .pages-hamburger {
        display: block;
    }

    .pages,
    .language-toggle button {
        display: none;
    }

    body {
        max-width: 100vw;
    }

    .header div:nth-child(1) {
        width: 100%;
    }

    .menu {
        padding-right: 30%;
    }

}

@font-face {
    font-family: Inknut Antiqua;
    src: url("../fonts/InknutAntiqua-Black.ttf");
}
</style>