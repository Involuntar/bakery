<template>
    <div class="corporate">
        <div class="main-photo">
            <div class="features-header">
                <h1>
                    Особые сладости для <br>
                    важных мероприятий
                </h1>
                <p>
                    Можете смело вычёркивать пункт из своего чек-листа, связанного с организацией сладкой
                    части для корпоративного мероприятия — мы проконсультируем, приготовим и доставим ваши
                    корпоративные сладости в назначенный день, время и место.
                </p>
            </div>
            <div class="features">
                <div class="feature">
                    <p>
                        Фото-печать
                    </p>
                    <p>
                        Логотипы, фотографии высокого качества, любые изображения
                        в цифровом формате мы можем перенести на сахарную пасту или
                        шоколад, которые украсят сладости.
                    </p>
                </div>
                <div class="feature">
                    <p>
                        3D-фигурки
                    </p>
                    <p>
                        На собственном 3D-принтере мы создаем любые пресс-формы
                        для шоколада или сахарной пасты.
                    </p>
                </div>
                <div class="feature">
                    <p>
                        Любая начинка
                    </p>
                    <p>
                        Имеем возможность предложить вам начинки на любой вкус.
                    </p>
                </div>
                <div class="feature">
                    <p>
                        1000 сладостей/сутки
                    </p>
                    <p>
                        Многолетний опыт и профессиональная команда позволяют нам
                        качественно выполнять заказы любого объема
                    </p>
                </div>
            </div>
        </div>
        <div class="contacts">
            <div class="phone-number">
                <p>
                    +7 499 322-00-20 WhatsApp <br>
                    пн-пт 10:00–20:00 (Москва) <br>
                    сб-вс 10:00-17:00
                </p>
            </div>
            <div class="social-media">
                <div class="vkontakte">
                    <p class="vkontakte-text">ВКонтакте</p>
                    <a href=""><button></button></a>
                </div>
                <div class="telegram">
                    <p class="vkontakte-text">Telegram</p>
                    <a href=""><button></button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.corporate {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto 2.96vh auto;
    min-height: 768px;
}

.main-photo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 53vw;
    height: 69vh;
    background-color: rgb(0, 0, 0, 0.6);
    border-radius: 30px;
    position: relative;
    color: #FFF;
}

.main-photo::before {
    content: "";
    background-image: url('/public/images/corp1.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

.features-header {
    padding: 0 23px;
}

.features-header h1 {
    font-size: 2.89vw;
    font-family: JejuMyeongjo;
}

.features-header p {
    font-size: 1vw;
    font-family: JejuMyeongjo;
}

.feature {
    display: flex;
    justify-content: space-between;
    align-items: center;
    counter-increment: count 1;
    padding-left: 23px;
    font-family: Inknut Antiqua SemiBold;
}

.feature p:nth-child(1)::before {
    content: '0' counter(count, decimal)'\00a0\00a0\00a0\00a0\00a0';
    font-size: 1.27vw;
}

.feature p:nth-child(2) {
    width: 30.7vw;
    font-size: 0.93vw;
    font-family: JejuMyeongjo;
}

.contacts {
    width: 26vw;
    height: 69vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.phone-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 37vh;
    background-color: rgb(0, 0, 0, 0.45);
    border-radius: 30px;
    position: relative;
}

.phone-number::before {
    content: "";
    background-image: url('/public/images/corp2.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

.phone-number p {
    text-align: center;
    color: #FFF;
    font-size: 1vw;
    font-family: Inknut Antiqua;
}

.social-media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 29vh;
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 30px;
    position: relative;
}

.social-media::before {
    content: "";
    background-image: url('/public/images/corp3.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

.vkontakte,
.telegram {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
}

.vkontakte-text,
.telegram-text {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 15px;
    font-family: Inknut Antiqua;
    font-size: 1.3vw;
    width: 11vw;
    height: 4vh;
}

.social-media button {
    background-image: url("/public/images/Link.svg");
    background-size: 2vh;
    background-repeat: no-repeat;
    background-position: center;
    width: 4vh;
    height: 4vh;
    border-radius: 100%;
    border: 1px solid #000;
    cursor: pointer;
}

@font-face {
    font-family: Inknut Antiqua;
    src: url("/fonts/InknutAntiqua-Light.ttf");
}

@font-face {
    font-family: Inknut Antiqua SemiBold;
    src: url('/fonts/InknutAntiqua-SemiBold.ttf');
}

@font-face {
    font-family: JejuMyeongjo;
    src: url('/fonts/JejuMyeongjo-Regular.ttf');
}

@media screen and (width <=768px) {
    .corporate {
        flex-direction: column;
    }

    .main-photo {
        width: 91.8vw;
        margin-bottom: 2.4vh;
        height: 105vh;
    }

    .contacts {
        width: 91.8vw;
    }

    .vkontakte-text,
    .telegram-text {
        font-size: 3vw;
        width: 28.2vw;
    }

    .phone-number p {
        font-size: 3.6vw;
    }

    .vkontakte,
    .telegram {
        width: 53vw;
    }

    .feature {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 23px;
    }

    .features-header h1 {
        font-size: 6.7vw;
    }

    .features-header p {
        font-size: 3.6vw;
    }

    .feature p:nth-child(1)::before {
        font-size: 4.1vw;
    }

    .feature p:nth-child(2) {
        font-size: 3.6vw;
        width: auto;
    }
}
</style>