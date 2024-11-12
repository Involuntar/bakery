<template>
    <main>
        <div class="container">
            <div class="elem1">
                <div class="blok1">
                    <h1>Будем на связи!</h1>
                    <p>Каждую неделю мы делимся своим опытом: собираем полезные материалы, реализуем спецпроекты, делимся новостями из жизни кондитерской.</p>
                </div>
                <div class="blok2">
                    <h2>Делитесь впечатлениями о нас в социальных сетях</h2>
                    <p>Спасибо, что помогаете нам стать лучше. Мы читаем каждый отзыв.</p>
                </div>
                <div class="blok3">
                    <h2>Мы выбрали говорить с миром одним из самых вкусных способов.</h2>
                    <div class="blok-info">
                        <ul>
                            <li>+7 499 322-00-20</li>
                            <li>пн-пт 10:00–20:00 (Москва)</li>
                            <li>сб-вс 10:00-17:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="elem2">2 элемент</div>
            <div class="elem3">3 элемент</div>
            <div class="elem4">4 элемент</div>
        </div>
    </main>
</template>

<style>
.container{
    display: grid;
    padding: 4vh 5vh 0vh 5vh;
    grid-template-columns: 2fr 1fr 1fr;
}
.elem1{
    background-color: aqua;
    grid-column: 1;
    grid-row: 1 / span 2;
}
.elem2{
    /*background-color: blue;*/
    grid-row: 1;
    grid-column: 2 / span 3;
}
.elem3{
    /*background-color: blueviolet;*/
    grid-column: 2;
    grid-row: 2;
}
.elem4{
    /*background-color: brown;*/
    grid-column: 3;
    grid-row: 2;
}
</style>