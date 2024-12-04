<template>
    <main>
        <div class="container">
            <div class="elem1">
                <div class="blok1">
                    <div class="bl1text1">Будем на связи!</div>
                    <div class="bl1text2">Каждую неделю мы делимся своим опытом: собираем полезные материалы, реализуем спецпроекты, делимся новостями из жизни кондитерской.</div>
                </div>
                <div class="blok2">
                    <div class="bl2text1">Делитесь впечатлениями о нас в социальных сетях</div>
                    <div class="bl2text2">Спасибо, что помогаете нам стать лучше. Мы читаем каждый отзыв.</div>
                </div>
                <div class="blok3">
                    <div class="bl3text1">Мы выбрали говорить с миром одним из самых вкусных способов.</div>
                    <div class="blok-info">
                        <div class="ul1">+7 499 322-00-20</div>
                        <div class="ul2">пн-пт 10:00–20:00 (Москва)</div>
                        <div class="ul3">сб-вс 10:00-17:00</div>
                    </div>
                </div>
            </div>
            <div class="elem2"></div>
            <div class="elem3">
                <div class="vk">
                    <div class="blokt1">
                        <div class="links">
                            <div class="linkVK"><a href="">Вконтакте</a></div>
                            <div class="linkVK2"><a href=""><img src="/public/images/link.png" alt="ссылка на вк"></a></div>
                        </div>
                        <div class="maintext">
                            <div class="vktext1">Наша группа вконтакте с актуальной информацией и розыгрышами</div>
                            <div class="vktext2">Участвуйте - выигрывайте и наслаждайтесь всей семьей нашей выпечкой</div>
                        </div>
                    </div>
                </div>
                <div class="telegram">
                    <div class="blokt1">
                        <div class="links">
                            <div class="linkTele"><a href="">Telegram</a></div>
                            <div class="linkVK2"><a href=""><img src="/public/images/link.png" alt="ссылка на телеграм"></a></div>
                        </div>
                        <div class="maintext1">
                            <div class="Teletext1">Розыгрыши, видео, о том как мы готовим, и не только!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
button{
    background-color: rgb(255, 255, 255);
}
.container{
    max-width: 80%;
    display: grid;
    padding: 9vh;
    margin: 0 auto;
    grid-template-columns: 2fr 1fr;
}
.elem1{
    grid-column: 1;
    grid-row: 1 / span 2;
    margin: 0vh 0vh 4vh 0vh;
}
.blok1{
    display: grid;
    grid-row: 1fr 1fr;
    gap: 4vh;
    margin-bottom: 5vh;
}
.bl1text1{
    font-size: 3rem;
    grid-row: 1;
}
.bl1text2{
    font-size: 1.4rem;
    max-width: 65vh;
    grid-row: 2;
}
.blok2{
    display: grid;
    grid-row: 1fr 1fr;
    gap: 4vh;
    margin-bottom: 5vh;
}
.bl2text1{
    font-size: 2.2rem;
    grid-row: 1;
    margin-left: 30%;
    text-align: right;
}
.bl2text2{
    font-size: 1.4rem;
    max-width: 65vh;
    grid-row: 2;
}
.blok3{
    display: grid;
    grid-row: 1fr 1fr;
    gap: 4vh;
}
.bl3text1{
    font-size: 2.2rem;
    grid-row: 1;
    max-width: 57vh;
}
.blok-info .ul1, .ul2, .ul3{
    font-size: 1.1rem;
    margin-bottom: 1vh;
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
    gap: 6vh;
}
.vk{
    background-image: url("/public/images/aboutus2.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    height: 30vh;
    width: 30vh;
    margin: 0 auto;
    position: relative;
}
.blokt1{
    position: absolute;
    width: 30vh;
    height: 30vh;
    background-color: rgba(0, 0, 0, 0.450);
    color: aliceblue;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
}
.links{
    /*background-color: aquamarine;*/
    grid-column: 1/ span 2;
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.linkVK{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
}
.linkTele{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
}
.linkVK a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
}
.linkTele a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
}
.linkVK2{
    grid-column: 2;
    margin-left: 40%;
    margin-top: 30px;
}
.vktext1{
    font-size: 24px;
    margin: 2vh;
}
.vktext2{
    font-size: 16px;
    margin: 2vh;
}
.maintext{
    grid-column: 1/ span 2;
    grid-row: 2;
}
.maintext1{
    grid-column: 1/ span 2;
    grid-row: 2;
}
.Teletext1{
    font-size: 24px;
    margin: 2vh;
}
.telegram{
    background-image: url("/public/images/aboutus3.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    height: 30vh;
    width: 30vh;
    margin: 0 auto;
    position: relative;
}
@media (width <= 1550px) {
    .container{
      max-width: 80%;
      display: grid;
      padding: 6vh;
      margin: 0 auto;
      grid-template-columns: 2fr 1fr;
    }
    .bl2text1{
       font-size: 1.5rem;
       grid-row: 1;
       margin-left: 0px;
       text-align: center;
    }
    .bl3text1{
       font-size: 1.5rem;
       grid-row: 1;
       max-width: 57vh;
    }
    .elem2{
       height: 25vh;
       max-height: 357px;
       background-image: url("/public/images/aboutus1.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       grid-row: 1;
       grid-column: 2;
       margin: 0vh 0vh 2vh 3vh;
    }
    .elem3{
       grid-column: 2;
       grid-row: 2;
       margin: 0vh 0vh 2vh 3vh;
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 4vh;
    }
    .vk{
      background-image: url("/public/images/aboutus2.png");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 30px;
      height: 25vh;
      width: 25vh;
      margin: 0 auto;
      position: relative;
    }
    .telegram{
       background-image: url("/public/images/aboutus3.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       height: 25vh;
       width: 25vh;
       margin: 0 auto;
       position: relative;
    }
    .blokt1{
    position: absolute;
    width: 25vh;
    height: 25vh;
    background-color: rgba(0, 0, 0, 0.450);
    color: aliceblue;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    }
    .linkVK{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkTele{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkVK a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkTele a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkVK2{
    grid-column: 2;
    margin-left: 40%;
    margin-top: 30px;
    }
    .vktext1{
    font-size: 1rem;
    margin: 2vh;
    }
    .vktext2{
    font-size: 0.8rem;
    margin: 2vh;
    }
    .maintext{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .maintext1{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .Teletext1{
    font-size: 1rem;
    margin: 2vh;
    }
}
@media (width <= 1020px) {
    .container{
      max-width: 80%;
      display: grid;
      padding: 1vh;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.5fr 0.5fr;
      gap: 1vh;
    }
    .blok-info{
        display: flex;
        gap: 2vh;
        margin: 0 auto;
    }
    .blok1{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .blok2{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .bl1text1{
       font-size: 2rem;
       grid-row: 1;
       margin: 0 auto;
    }
    .bl1text2{
        font-size: 1rem;
        max-width: 65vh;
        grid-row: 2;
    }
    .bl2text1{
       font-size: 1.5rem;
       grid-row: 1;
       margin-left: 0px;
       text-align: right;
    }
    .bl2text2{
       font-size: 1rem;
       max-width: 65vh;
       grid-row: 2;
    }
    .bl3text1{
       font-size: 1.2rem;
       grid-row: 1;
       max-width: 100%;
       margin: 0 auto;
    }
    .elem1{
       grid-row: 1;
       grid-column: 1;
    }
    .elem2{
       height: 25vh;
       max-height: 357px;
       background-image: url("/public/images/aboutus1.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       grid-row: 2;
       grid-column: 1;
       margin: 0px 0px 3vh 1vh;
       background-color: aquamarine;
    }
    .elem3{
       grid-column: 1;
       grid-row: 3;
       margin: 0px 0px 3vh 1vh;
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 2vh;
    }
    .vk{
      background-image: url("/public/images/aboutus2.png");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 30px;
      height: 25vh;
      width: 38vh;
      margin: 0 auto;
      position: relative;
    }
    .telegram{
       background-image: url("/public/images/aboutus3.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       height: 25vh;
       width: 38vh;
       margin: 0 auto;
       position: relative;
    }
    .blokt1{
    position: absolute;
    width: 38vh;
    height: 25vh;
    background-color: rgba(0, 0, 0, 0.450);
    color: aliceblue;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    }
    .linkVK{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkTele{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkVK a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkTele a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkVK2{
    grid-column: 2;
    margin-left: 40%;
    margin-top: 30px;
    }
    .vktext1{
    font-size: 1rem;
    margin: 2vh;
    }
    .vktext2{
    font-size: 0.8rem;
    margin: 2vh;
    }
    .maintext{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .maintext1{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .Teletext1{
    font-size: 1rem;
    margin: 2vh;
    }
}
@media (width <= 820px) {
    .container{
      max-width: 80%;
      display: grid;
      padding: 1vh;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.5fr 0.5fr;
      gap: 1vh;
    }
    .blok-info{
        display: flex;
        gap: 2vh;
        margin: 0 auto;
    }
    .blok1{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .blok2{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .bl1text1{
       font-size: 2rem;
       grid-row: 1;
       margin: 0 auto;
    }
    .bl1text2{
        font-size: 1rem;
        max-width: 65vh;
        grid-row: 2;
    }
    .bl2text1{
       font-size: 1.5rem;
       grid-row: 1;
       margin-left: 0px;
       text-align: right;
    }
    .bl2text2{
       font-size: 1rem;
       max-width: 65vh;
       grid-row: 2;
    }
    .bl3text1{
       font-size: 1.2rem;
       grid-row: 1;
       max-width: 100%;
       margin: 0 auto;
    }
    .elem1{
       grid-row: 1;
       grid-column: 1;
    }
    .elem2{
       height: 25vh;
       max-height: 357px;
       background-image: url("/public/images/aboutus1.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       grid-row: 2;
       grid-column: 1;
       margin: 0px 0px 3vh 1vh;
       background-color: aquamarine;
    }
    .elem3{
       grid-column: 1;
       grid-row: 3;
       margin: 0px 0px 3vh 1vh;
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 2vh;
    }
    .vk{
      background-image: url("/public/images/aboutus2.png");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 30px;
      height: 25vh;
      width: 30vh;
      margin: 0 auto;
      position: relative;
    }
    .telegram{
       background-image: url("/public/images/aboutus3.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       height: 25vh;
       width: 30vh;
       margin: 0 auto;
       position: relative;
    }
    .blokt1{
    position: absolute;
    width: 30vh;
    height: 25vh;
    background-color: rgba(0, 0, 0, 0.450);
    color: aliceblue;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    }
    .linkVK{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkTele{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkVK a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkTele a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkVK2{
    grid-column: 2;
    margin-left: 40%;
    margin-top: 30px;
    }
    .vktext1{
    font-size: 1rem;
    margin: 2vh;
    }
    .vktext2{
    font-size: 0.8rem;
    margin: 2vh;
    }
    .maintext{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .maintext1{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .Teletext1{
    font-size: 1rem;
    margin: 2vh;
    }
}
@media (width <= 650px) {
    .container{
      max-width: 80%;
      display: grid;
      padding: 1vh;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.5fr 0.5fr;
      gap: 1vh;
    }
    .blok-info{
        display: list-item;
        gap: 2vh;
        margin: 0 auto;
    }
    .blok1{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .blok2{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .bl1text1{
       font-size: 2rem;
       grid-row: 1;
       margin: 0 auto;
    }
    .bl1text2{
        font-size: 1rem;
        max-width: 65vh;
        grid-row: 2;
    }
    .bl2text1{
       font-size: 1.5rem;
       grid-row: 1;
       margin-left: 0px;
       text-align: right;
    }
    .bl2text2{
       font-size: 1rem;
       max-width: 65vh;
       grid-row: 2;
    }
    .bl3text1{
       font-size: 1.2rem;
       grid-row: 1;
       max-width: 100%;
       margin: 0 auto;
    }
    .elem1{
       grid-row: 1;
       grid-column: 1;
    }
    .elem2{
       height: 22vh;
       width: 40vh;
       background-image: url("/public/images/aboutus1.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       grid-row: 2;
       grid-column: 1;
       margin: 0 auto;
       background-color: aquamarine;
    }
    .elem3{
       grid-column: 1;
       grid-row: 3;
       margin: 0px 0px 3vh 1vh;
       display: grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr 1fr;
       gap: 2vh;
    }
    .vk{
      background-image: url("/public/images/aboutus2.png");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 30px;
      height: 20vh;
      width: 40vh;
      margin: 0 auto;
      position: relative;
      grid-row: 1;
    }
    .telegram{
       background-image: url("/public/images/aboutus3.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       height: 22vh;
       width: 40vh;
       margin: 0 auto;
       position: relative;
       grid-row: 2;
    }
    .blokt1{
    position: absolute;
    width: 40vh;
    height: 22vh;
    background-color: rgba(0, 0, 0, 0.450);
    color: aliceblue;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    }
    .linkVK{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkTele{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkVK a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkTele a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkVK2{
    grid-column: 2;
    margin-left: 40%;
    margin-top: 30px;
    }
    .vktext1{
    font-size: 1rem;
    margin: 2vh;
    }
    .vktext2{
    font-size: 0.8rem;
    margin: 2vh;
    }
    .maintext{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .maintext1{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .Teletext1{
    font-size: 1rem;
    margin: 2vh;
    }
}
@media (width <= 425px) {
    .container{
      max-width: 80%;
      display: grid;
      padding: 1vh;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.5fr 0.5fr;
      gap: 1vh;
    }
    .blok-info{
        display: list-item;
        gap: 2vh;
        margin: 0 auto;
    }
    .blok1{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .blok2{
       display: grid;
       grid-row: 1fr 1fr;
       gap: 2vh;
       margin-bottom: 2vh;
    }
    .bl1text1{
       font-size: 2rem;
       grid-row: 1;
       margin: 0 auto;
    }
    .bl1text2{
        font-size: 1rem;
        max-width: 65vh;
        grid-row: 2;
    }
    .bl2text1{
       font-size: 1.5rem;
       grid-row: 1;
       margin-left: 0px;
       text-align: right;
    }
    .bl2text2{
       font-size: 1rem;
       max-width: 65vh;
       grid-row: 2;
    }
    .bl3text1{
       font-size: 1.2rem;
       grid-row: 1;
       max-width: 100%;
       margin: 0 auto;
    }
    .elem1{
       grid-row: 1;
       grid-column: 1;
    }
    .elem2{
       height: 28vh;
       width: 28vh;
       background-image: url("/public/images/aboutus1.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       grid-row: 2;
       grid-column: 1;
       margin: 0 auto;
       background-color: aquamarine;
    }
    .elem3{
       grid-column: 1;
       grid-row: 3;
       margin: 0px 0px 3vh 1vh;
       display: grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr 1fr;
       gap: 2vh;
    }
    .vk{
      background-image: url("/public/images/aboutus2.png");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 30px;
      height: 28vh;
      width: 28vh;
      margin: 0 auto;
      position: relative;
      grid-row: 1;
    }
    .telegram{
       background-image: url("/public/images/aboutus3.png");
       background-repeat: no-repeat;
       background-size: cover;
       border-radius: 30px;
       height: 28vh;
       width: 28vh;
       margin: 0 auto;
       position: relative;
       grid-row: 2;
    }
    .blokt1{
    position: absolute;
    width: 28vh;
    height: 28vh;
    background-color: rgba(0, 0, 0, 0.450);
    color: aliceblue;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    }
    .linkVK{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkTele{
    grid-column: 1;
    margin-left: 20px;
    margin-top: 40px;
    }
    .linkVK a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkTele a{
    background-color: aliceblue;
    width: 80%;
    height: 40%;
    border-radius: 20px;
    color: black;
    font-size: 1rem;
    margin: 10px 10px 10px 10px;
    text-align: center;
    padding: 10px;
    }
    .linkVK2{
    grid-column: 2;
    margin-left: 40%;
    margin-top: 30px;
    }
    .vktext1{
    font-size: 1rem;
    margin: 2vh;
    }
    .vktext2{
    font-size: 0.8rem;
    margin: 2vh;
    }
    .maintext{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .maintext1{
    grid-column: 1/ span 2;
    grid-row: 2;
    }
    .Teletext1{
    font-size: 1rem;
    margin: 2vh;
    }
}
</style>