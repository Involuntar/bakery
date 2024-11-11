<template>
    <div class="header">      
         
    </div>
    <div class="main">
        <div class="container-info">
            <div class="colum1">
                <h1>Осенняя коллекция</h1>
                <a id="colortext" href="">Открыть каталог</a>
            </div> 
            <div class="colum2">
                <ul>
                    <li>+7 499 322-00-20</li>
                    <li>пн-пт 10:00–20:00 (Москва)</li>
                    <li>сб-вс 10:00-17:00</li>
                </ul>           
            </div>
        </div>
        <div class="topInfo">
            <p id="H1">В основе Biskvitnyy Dvor лежит философия семьи , домашнего тепла и уюта, направленное на заботу о вас.</p>
            <div class="blotopinfo">
                <p>Сбалансированные сладости для встречи за кофе с подругой, уютных посиделок с близкими или свидания с собой.</p>
                <a href="#">Открыть каталог</a>
            </div>
        </div>
        <div class="category">
        </div>
        <div class="storylife">
            <div class="photolife">
                <img src="/public/images/lifephoto.png" alt="lifePhoto">
            </div>
            <div class="storyblok">
                <p>Когда-то с сестрой мы играли в песочнице и мечтали печь много вкусных блюд для наших родных, сейчас мы обе выросли и воплотили свою мечту в жизнь. Мы отрыли свою собственную пекарню, чтобы люди не просто если, но еще и дарили наши сладости на праздники или просто для того. чтобы сделать своим близким приятное.</p>
                <p>Всегда с любовью, ваши кондитеры Любовь и Надежда.</p>
            </div>
        </div>
    </div>
</template>

<style>
ul{
    list-style: none;
    color: aliceblue;
}
.container-info{
    color: aliceblue;
    background-image: url("/public/images/mainPageIMG.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 30vh 7vh 2vh 7vh;
    display: grid;
    grid-template-columns: auto auto;
    text-align: left;
    gap: 10vh;
}

.colum1{
    color: aliceblue;
}
.colum2{
    color: aliceblue;
}
.topInfo{
    padding: 2vh 24vh 2vh 24vh;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20vh;
}
.topInfo #H1{
    font-family: JejuMyeongjo;
    font-size: 32px;
}
.topInfo.blotopinfo p{
    font-size: 14px;
} 
.storylife{
    max-width: 1000px;
    max-height: 580px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
}
.photolife{
    position: relative;
}
.storyblok{
    margin-top: 15vh;
    margin-left: 30vh;
    max-width: 600px;
	-webkit-transform: skew(-20deg);
	-moz-transform: skew(-20deg);
	-o-transform: skew(-20deg);
    font-family: JejuMyeongjo;
    font-size: 16px;
    color: aliceblue;
    position: absolute;
    padding: 8vh 10vh 8vh 10vh;
    background-color: rgba(81, 81, 81, 0.8);
}
</style>