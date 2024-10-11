<template>
    <div class="header">
        <div>
            <h3><NuxtLink to="/">Biskvitnyy Dvor</NuxtLink></h3>
        </div>
        <div class="pages">
            <nav>
                <p><NuxtLink to="/catalog" class="">Каталог</NuxtLink></p>
                <p><NuxtLink to="/about">О нас</NuxtLink></p>
                <p><NuxtLink to="/corporateclients">Корпоративным клиентам</NuxtLink></p>
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
                <li>
                    <button>Ru</button>
                </li>
                <li><NuxtLink to="/catalog" class="">Каталог</NuxtLink></li>
                <li><NuxtLink to="/about">О нас</NuxtLink></li>
                <li><NuxtLink to="/corporateclients">Корпоративным клиентам</NuxtLink></li>
            </ul>
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
    height: 5%;
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

.language-toggle button, .menu button {
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

.language-toggle button:hover, .menu button:hover {
    background: linear-gradient(#66666608 67.07%, #00000026 96.54%);
    cursor: pointer;
}

.language-toggle button:active, .menu button:active {
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

.pages-hamburger {
    display: none;
    text-align: right;
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
    position: absolute;
    top: 0;
    margin: 0;
    list-style: none;
    height: 100%;
    width: 55%;
    padding: 50px;
    padding-top: 100px;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    z-index: 1;
    background: #403e3a;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.menu li:nth-child(1) {
    margin-bottom: 50px;
}

.menu li {
    padding: 10px 0;
    font-size: 22px;
}

.menu a {
    color: #EAE2D3;
}

.pages-hamburger input:checked ~ ul
{
  transform: translate(-50%, 0);
}

.pages-hamburger input:checked ~ span {
    opacity: 1;
    transform: rotate(-45deg) translate(2px, -5px);
    background: white;
}

.pages-hamburger input:checked ~ span:nth-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.pages-hamburger input:checked ~ span:nth-child(4)
{
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

@media (width <= 600px) {
    .pages-hamburger {
        display: block;
    }

    .pages, .language-toggle button {
        display: none;
    }
}

@font-face {
    font-family: Inknut Antiqua;
    src: url("../fonts/InknutAntiqua-Black.ttf");
}
</style>