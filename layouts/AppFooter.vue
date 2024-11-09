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
    width: 1200px;
    margin: 0 auto;
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

@media screen and (width <= 768px) {
    .app-footer {
        height: 50px;
    }
    
    .footer {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 40% 40%;
        font-size: 8px;
        text-align: left;
    }

    .footer p {
        width: 100%;
        text-align: left;
    }

    .footer p:nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .footer p:nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 2;
    }

    .footer p:nth-child(3) {
        grid-column: 2 / 2;
        grid-row: 2 / 2;
        text-align: right;
    }
}

@font-face {
    font-family: JejuMyeongjo;
    src: url("../fonts/JejuMyeongjo-Regular.ttf");
}
</style>