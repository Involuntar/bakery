<template>
    <div class="app-footer">
        <div class="footer">
            <p>© 2024 Biskvitnyy Dvor</p>
            <p class="policy"><NuxtLink to="/policy">Политика кофиденциальности</NuxtLink></p>
            <p class="developers">Разработано студией ASDK</p>
        </div>
    </div>
</template>

<style>
.app-footer {
    width: 100%;
    bottom: 0;
    position: fixed;
    height: 50px;
    background: #3D3D3DFA;
}

.footer {
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    padding: 5px 40px;
    font-family: JejuMyeongjo;
    font-size: 14px;
}

.policy {
    text-align: center;
}

.developers {
    text-align: right;
}

.footer p {
    width: 33%;
}

.footer a {
    color: #FFFFFF;
}

@font-face {
    font-family: JejuMyeongjo;
    src: url("../fonts/JejuMyeongjo-Regular.ttf");
}
</style>