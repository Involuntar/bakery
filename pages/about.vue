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
            <div class="elem2"></div>
            <div class="elem3">
                <div class="vk">
                    <div class="bloktext1">
                        <a href="#">Вконтакте</a>
                        <p>Наша группа вконтакте с актуальной информацией и розыгрышами</p>
                        <p>Участвуйте - выигрывайте и наслаждайтесь всей семьей нашей выпечкой</p>
                    </div>
                </div>
                <div class="telegram">
                    <div class="bloktext2">
                        <a href="#">Telegram</a>
                        <p>Розыгрыши, видео о том как мы готовим и не только!</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
ul, ul li {
	list-style: none;
}
img, svg {
	max-width: 100%;
	height: auto;
}
button{
    background-color: rgb(255, 255, 255);
}
.container{
    display: grid;
    padding: 4vh 5vh 0vh 5vh;
    grid-template-columns: 2fr 1fr;
}
.elem1{
    grid-column: 1;
    grid-row: 1 / span 2;
    margin: 0vh 0vh 4vh 0vh;
}
.elem2{
    height: 30vh;
    max-height: 357px;
    background-image: url("/public/images/aboutus1.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    grid-row: 1;
    grid-column: 2;
    margin: 0vh 0vh 3vh 5vh;
}
.elem3{
    grid-column: 2;
    grid-row: 2;
    margin: 0vh 0vh 3vh 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.vk{
    background-image: url("/public/images/aboutus2.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    height: 35vh;
    width: 35vh;
    margin: 0 auto;
    position: relative;
}
.bloktext1{
    position: absolute;
    width: 35vh;
    height: 35vh;
}
.telegram{
    background-image: url("/public/images/aboutus3.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    height: 35vh;
    width: 35vh;
    margin: 0 auto;
    position: relative;
}
.bloktext2{
    position: absolute;
    width: 35vh;
    height: 35vh;
}
</style>