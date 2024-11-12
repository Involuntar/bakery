<template>
    <div class="header">      
         
    </div>
    <div class="main">
        <div class="container-info">
            <div class="container">
                <div class="colum1">
                    <h1>Осенняя коллекция</h1>
                    <a href="/catalog">Открыть каталог</a>
                </div> 
                <div class="colum2">
                    <ul>
                        <li>+7 499 322-00-20</li>
                        <li>пн-пт 10:00–20:00 (Москва)</li>
                        <li>сб-вс 10:00-17:00</li>
                    </ul>           
                </div>
            </div>
            
        </div>
        <div class="topInfo">
            <p id="H1">В основе Biskvitnyy Dvor лежит философия семьи , домашнего тепла и уюта, направленное на заботу о вас.</p>
            <div class="blotopinfo">
                <p>Сбалансированные сладости для встречи за кофе с подругой, уютных посиделок с близкими или свидания с собой.</p>
                <a href="/catalog">Открыть каталог</a>
            </div>
        </div>
        <Cardindex/> <!--Необходимо понять как правильно генерировать свои карточки для данной страницы-->
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
<script>
</script>
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
    padding: 40vh 7vh 2vh 7vh;
    text-align: left;
    gap: 10vh;
}
.container{
    display: grid;
    grid-template-columns: auto auto;
}
.colum1 h1{
    font-family: JejuMyeongjo-Regular;
    font-size: 50px;
    margin-top: 0px;
}
.colum1 a{
    color: aliceblue;
    text-decoration: underline;
    font-size: 28px;
}
.colum2 ul li{
    color: aliceblue;
    margin-bottom: 2vh;
    text-align: right;
    font-family: InknutAntiqua-Regular;
    font-size: 18px;
}
.topInfo{
    padding: 4vh 24vh 2vh 24vh;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20vh;
}
.topInfo #H1{
    font-family: JejuMyeongjo;
    font-size: 32px;
    margin-top: 0vh;
}
.blotopinfo{
    text-align: right;
}
.blotopinfo p{
    font-size: 16px;
    font-family: JejuMyeongjo;
    padding-bottom: 2vh;
    margin-top: 0vh;
}
.blotopinfo a{
    text-decoration: underline;
    font-size: 20px;
}
.storylife{
    max-width: 1000px;
    max-height: 580px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    margin: 4vh auto 10vh auto;
    background-color: brown;
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