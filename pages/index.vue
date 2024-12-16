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
        <div class="ContainerCardFilter">
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter1">
                        <div class="amounts">
                            <div class="prefix">от  0,5 кг</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Бенто-торы</a></div>
                    <div class="infogr2"><a href="/catalog">от 700 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter2">
                        <div class="amounts">
                            <div class="prefix">от  0,5 кг</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Готовые торты</a></div>
                    <div class="infogr2"><a href="/catalog">от 1200 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter3">
                        <div class="amounts">
                            <div class="prefix">от 2 шт</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Осенняя кол-ция</a></div>
                    <div class="infogr2"><a href="/catalog">от 570 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter4">
                        <div class="amounts">
                            <div class="prefix">от 2 шт</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Пирожные</a></div>
                    <div class="infogr2"><a href="/catalog">от 700 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter5">
                        <div class="amounts">
                            <div class="prefix">от 6 шт</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Капкейки</a></div>
                    <div class="infogr2"><a href="/catalog">от 576 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter6">
                        <div class="amounts">
                            <div class="prefix">от 6 шт</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">ПП десерты</a></div>
                    <div class="infogr2"><a href="/catalog">от 700 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter7">
                        <div class="amounts">
                            <div class="prefix">от 0.5 кг</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Торты без мастики</a></div>
                    <div class="infogr2"><a href="/catalog">от 1700 руб</a></div>
                </div>
            </div>
            <div class="cardindex">
                <a href="/catalog">
                    <div class="filter8">
                        <div class="amounts">
                            <div class="prefix">от 4 шт</div>
                        </div>
                    </div>
                </a>
                <div class="infogridfiltr">
                    <div class="infogr1"><a href="/catalog">Эклеры</a></div>
                    <div class="infogr2"><a href="/catalog">от 480 руб</a></div>
                </div>
            </div>
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
<script>
</script>
<style scoped>
ul{
    list-style: none;
    color: aliceblue;
}
a{
    color: black;
    direction: none;
}
.container-info{
    color: aliceblue;
    background-image: url("/public/images/mainPageIMG.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 40vh 0vh 2vh 0vh;
    text-align: left;
}
.cardindex{
    height: 35vh;
    width: 30vh;
    margin: 0 auto;
    border-radius: 10%;
}
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    margin: 0 auto;
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
.colum2{
    margin-left: 20vh;
}
.colum2 ul li{
    color: aliceblue;
    margin-bottom: 2vh;
    text-align: right;
    font-family: InknutAntiqua;
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
    font-size: 2.6rem;
    margin-top: 0vh;
}
.blotopinfo{
    text-align: right;
}
.blotopinfo p{
    font-size: 1.6rem;
    font-family: JejuMyeongjo;
    padding-bottom: 2vh;
    margin-top: 0vh;
}
.blotopinfo a{
    text-decoration: underline;
    font-size: 20px;
}
.storylife{
    width: 80%;
    height: 60vh;
    display: grid;
    grid-template-columns: auto auto;
    margin: 10vh auto;
    align-items: center;
}
.photolife{
    position: relative;
    margin: 0 auto;
}
.storyblok{
    width: 50vh;
	-webkit-transform: skew(-20deg);
	-moz-transform: skew(-20deg);
	-o-transform: skew(-20deg);
    font-family: JejuMyeongjo;
    border-end-end-radius: 10%;
    font-size: 1rem;
    color: aliceblue;
    position: absolute;
    padding: 6% 8% 6% 8%;
    margin-left: 25%;
    background-color: rgba(81, 81, 81, 0.8);
}
.ContainerCardFilter{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
}
.filter1{
    background-image: url("/public/images/bentoCake.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter2{
    background-image: url("/public/images/gotovietorti.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter3{
    background-image: url("/public/images/autmcollection.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter4{
    background-image: url("/public/images/pirozhenie.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter5{
    background-image: url("/public/images/capcake.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter6{
    background-image: url("/public/images/ppdeserti.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter7{
    background-image: url("/public/images/CakedonthaveMastika.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.filter8{
    background-image: url("/public/images/ecleri.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 28vh;
    width: 20vh;
    border-radius: 10%;
    margin: 0 auto;
}
.infogridfiltr{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1.5vh;
}
.infogr1{
    grid-column: 1;
    margin: 0 auto;
    font-weight: 700;
}
.infogr2{
    grid-column: 2;
    margin: 0 auto;
}
.amounts{
    height: 7vh;
    width: 7vh;
    border-radius: 45%;
    background-color: #515151;
    color: aliceblue;
    margin-left: 70%;
}
.prefix{
    width: 40px;
    margin: 0 auto;
    padding-top: 1.5vh;
}
@media (width <= 1300px) {
    .container-info{
        height: 30vh;
        padding: 2vh 0vh 2vh 0vh;
        text-align: left;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 80%;
        margin: 0 auto;
    }
    .colum1{
        grid-column: 1;
        grid-row: 1;
    }
    .colum2{
        grid-column: 1;
        grid-row: 2;
    }
    .colum1 h1{
       font-family: JejuMyeongjo-Regular;
       font-size: 3rem;
       margin-top: 0;
    }
    .colum1 a{
       color: aliceblue;
       text-decoration: underline;
       font-size: 2rem;
    }
    .topInfo{
       padding: 2vh 6vh 2vh 6vh;
       display: grid;
       grid-template-columns: auto;
       gap: 1vh;
    }
    .blotopinfo a{
       text-decoration: underline;
       font-size: 1.5rem;
    }
    .ContainerCardFilter{
       display: grid;
       max-width: 80%;
       margin: 0 auto;
       align-items: center;
       grid-template-columns: 1fr 1fr 1fr;
       gap: 5vh;
    }

}
@media (width <= 1100px) {
    .container-info{
        height: 30vh;
        padding: 2vh 0vh 2vh 0vh;
        text-align: left;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 80%;
        margin: 0 auto;
    }
    .colum1{
        grid-column: 1;
        grid-row: 1;
    }
    .colum2{
        grid-column: 1;
        grid-row: 2;
    }
    .colum1 h1{
       font-family: JejuMyeongjo-Regular;
       font-size: 3rem;
       margin-top: 0;
    }
    .colum1 a{
       color: aliceblue;
       text-decoration: underline;
       font-size: 2rem;
    }
    .topInfo{
       padding: 2vh 6vh 2vh 6vh;
       display: grid;
       grid-template-columns: auto;
       gap: 1vh;
    }
    .blotopinfo a{
       text-decoration: underline;
       font-size: 2rem;
    }
    .ContainerCardFilter{
       display: grid;
       max-width: 80%;
       margin: 0 auto;
       align-items: center;
       grid-template-columns: 1fr 1fr;
       gap: 5vh;
    }
    .cardindex{
       height: 25vh;
       width: 20vh;
       margin: 0 auto;
       border-radius: 10%;
       background-color: brown;
       margin-bottom: 4vh;
    }
    .filter1{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter2{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter3{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter4{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter5{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter6{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter7{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .filter8{
       height: 28vh;
       width: 20vh;
       border-radius: 10%;
    }
    .storylife{
       width: 80%;
       height: 30%;
       display: grid;
       grid-template-columns: auto auto;
       margin: 10vh auto;
       align-items: center;
    }
    .photolife img{
        width: 80%;
        height: 80%;
    }
    .storyblok{
       margin-top: 20%;
       margin-left: 15%;
       width: 25vh;
	   -webkit-transform: skew(-20deg);
	   -moz-transform: skew(-20deg);
	   -o-transform: skew(-20deg);
       font-family: JejuMyeongjo;
       border-radius: 10%;
       font-size: 1rem;
       color: aliceblue;
       position: absolute;
       padding: 4vh 5vh 4vh 5vh;
       background-color: rgba(81, 81, 81, 0.8);
    }
}
@media (width <= 630px) {
    .container-info{
        height: 30vh;
        padding: 2vh 0vh 2vh 0vh;
        text-align: left;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 80%;
        margin: 0 auto;
    }
    .colum1{
        grid-column: 1;
        grid-row: 1;
    }
    .colum2{
        grid-column: 1;
        grid-row: 2;
    }
    .colum1 h1{
       font-family: JejuMyeongjo-Regular;
       font-size: 2rem;
       margin-top: 0;
    }
    .colum1 a{
       color: aliceblue;
       text-decoration: underline;
       font-size: 1.2rem;
    }
    .topInfo{
       padding: 2vh 6vh 2vh 6vh;
       display: grid;
       grid-template-columns: auto;
       gap: 1vh;
    }
    .topInfo #H1{
       font-family: JejuMyeongjo;
       font-size: 1.5rem;
       margin-top: 0vh;
    }
    .blotopinfo p{
       font-size: 1rem;
       font-family: JejuMyeongjo;
       padding-bottom: 2vh;
       margin-top: 0vh;
    }
    .blotopinfo a{
       text-decoration: underline;
       font-size: 1rem;
    }
    .ContainerCardFilter{
       display: grid;
       max-width: 80%;
       margin: 0 auto;
       align-items: center;
       grid-template-columns: 1fr 1fr;
       gap: 5vh;
    }
    .cardindex{
       height: 20vh;
       width: 15vh;
       margin: 0 auto;
       border-radius: 10%;
       background-color: brown;
       margin-bottom: 4vh;
    }
    .filter1{
       height: 22vh;
       width: 18vh;
       border-radius: 10%;
    }
    .filter2{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .filter3{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .filter4{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .filter5{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .filter6{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .filter7{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .filter8{
        height: 22vh;
        width: 18vh;
       border-radius: 10%;
    }
    .storylife{
       width: 80%;
       height: 30%;
       display: grid;
       grid-template-columns: auto auto;
       margin: 10vh auto;
       align-items: center;
    }
    .photolife img{
        width: 80%;
        height: 80%;
    }
    .storyblok{
       margin-top: 28%;
       margin-left: 10%;
       width: 20vh;
	   -webkit-transform: skew(-10deg);
	   -moz-transform: skew(-10deg);
	   -o-transform: skew(-10deg);
       font-family: JejuMyeongjo;
       border-radius: 10%;
       font-size: 0.8rem;
       color: aliceblue;
       position: absolute;
       padding: 4vh 4vh 4vh 4vh;
       background-color: rgba(81, 81, 81, 0.8);
    }
}
@media (width <= 470px) {
    .container-info{
        height: 15vh;
        padding: 1vh 0vh 1vh 0vh;
        text-align: left;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 80%;
        margin: 0 auto;
    }
    .colum1{
        grid-column: 1;
        grid-row: 1;
    }
    .colum2{
        grid-column: 1;
        grid-row: 2;
        width: 100%;
        margin: 0 auto;
    }
    .colum2 ul{
        display: flex;
        gap: 1vh;
    }
    .colum2 ul li{
        font-size: 0.6rem;
    }
    .colum1 h1{
       font-family: JejuMyeongjo-Regular;
       font-size: 1.2rem;
       margin-top: 0;
    }
    .colum1 a{
       color: aliceblue;
       text-decoration: underline;
       font-size: 1rem;
    }
    .topInfo{
       padding: 2vh 6vh 2vh 6vh;
       display: grid;
       grid-template-columns: auto;
       gap: 1vh;
    }
    .topInfo #H1{
       font-family: JejuMyeongjo;
       font-size: 1.2rem;
       margin-top: 0vh;
    }
    .blotopinfo p{
       font-size: 0.8rem;
       font-family: JejuMyeongjo;
       padding-bottom: 2vh;
       margin-top: 0vh;
    }
    .blotopinfo a{
       text-decoration: underline;
       font-size: 1rem;
    }
    .ContainerCardFilter{
       display: grid;
       max-width: 80%;
       margin: 0 auto;
       align-items: center;
       grid-template-columns: 1fr 1fr;
       gap: 5vh;
    }
    .cardindex{
       height: 19vh;
       width: 13vh;
       margin: 0 auto;
       border-radius: 10%;
       background-color: brown;
       margin-bottom: 4vh;
    }
    .filter1{
       height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter2{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter3{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter4{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter5{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter6{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter7{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter8{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .storylife{
       width: 80%;
       height: 30%;
       display: grid;
       grid-template-columns: auto auto;
       margin: 10vh auto;
       align-items: center;
    }
    .photolife img{
        width: 80%;
        height: 80%;
    }
    .storyblok{
       margin-top: 28%;
       margin-left: 10%;
       width: 20vh;
	   -webkit-transform: skew(-10deg);
	   -moz-transform: skew(-10deg);
	   -o-transform: skew(-10deg);
       font-family: JejuMyeongjo;
       border-radius: 10%;
       font-size: 0.8rem;
       color: aliceblue;
       position: absolute;
       padding: 4vh 4vh 4vh 4vh;
       background-color: rgba(81, 81, 81, 0.8);
    }
}
@media (width <= 385px) {
    .container-info{
        height: 20vh;
        padding: 1vh 0vh 1vh 0vh;
        text-align: left;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 80%;
        margin: 0 auto;
    }
    .colum1{
        grid-column: 1;
        grid-row: 1;
    }
    .colum2{
        grid-column: 1;
        grid-row: 2;
        width: 100%;
        margin: 0 auto;
    }
    .colum2 ul li{
        font-size: 0.6rem;
    }
    .colum1 h1{
       font-family: JejuMyeongjo-Regular;
       font-size: 1.2rem;
       margin-top: 0;
    }
    .colum1 a{
       color: aliceblue;
       text-decoration: underline;
       font-size: 1rem;
    }
    .topInfo{
       padding: 2vh 6vh 2vh 6vh;
       display: grid;
       grid-template-columns: auto;
       gap: 1vh;
    }
    .topInfo #H1{
       font-family: JejuMyeongjo;
       font-size: 1.2rem;
       margin-top: 0vh;
    }
    .blotopinfo p{
       font-size: 0.8rem;
       font-family: JejuMyeongjo;
       padding-bottom: 2vh;
       margin-top: 0vh;
    }
    .blotopinfo a{
       text-decoration: underline;
       font-size: 1rem;
    }
    .ContainerCardFilter{
       display: grid;
       max-width: 80%;
       margin: 0 auto;
       align-items: center;
       grid-template-columns: 1fr;
       gap: 5vh;
    }
    .cardindex{
       height: 19vh;
       width: 13vh;
       margin: 0 auto;
       border-radius: 10%;
       background-color: brown;
       margin-bottom: 4vh;
    }
    .filter1{
       height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter2{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter3{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter4{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter5{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter6{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter7{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .filter8{
        height: 20vh;
       width: 16vh;
       border-radius: 10%;
    }
    .storylife{
       width: 80%;
       height: 30%;
       display: grid;
       grid-template-columns: auto auto;
       margin: 10vh auto;
       align-items: center;
    }
    .photolife img{
        width: 80%;
        height: 80%;
    }
    .storyblok{
       margin-top: 28%;
       margin-left: 10%;
       width: 20vh;
	   -webkit-transform: skew(-10deg);
	   -moz-transform: skew(-10deg);
	   -o-transform: skew(-10deg);
       font-family: JejuMyeongjo;
       border-radius: 10%;
       font-size: 0.8rem;
       color: aliceblue;
       position: absolute;
       padding: 4vh 4vh 4vh 4vh;
       background-color: rgba(81, 81, 81, 0.8);
    }
}
</style>