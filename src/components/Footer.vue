<template>
    <footer class="footer">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col"></div>
                <div class="col-md-3">
                    <ul>
                        <li>О нас</li>
                        <li>Оплата</li>
                        <li>Доставка</li>
                        <li>Возврат</li>
                        <li>Условия акций</li>
                        <li>Карта сайта</li>
                        <li>Оферта</li>
                        <li>Отзывы</li>
                    </ul>
                </div>
                <div class="col-md-4 mx-auto">
                    <p>
                        Мы в соцсетях
                    </p>
                    <p>
                        0 0 0 0 0 0
                    </p>
                    <p>
                        Способы оплаты
                    </p>
                    <p>
                        0 0 0 0 0 0
                    </p>
                </div>
                <div class="col-md-3">
                    <p>
                        Нужна помощь?
                    </p>
                    <p>
                        0 800 504 004 (бесплатно)
                    </p>
                    <p>
                        пн-пт: с 9:00 до 18:00
                    </p>
                    <p>
                        info@dressa.com.ua
                    </p>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    props: {
        msg: String
    },
    components: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
    background-color: #000;
    padding: 30px 0;
    color: #fff;
    font-size: 14px;
}

li {
    text-decoration: none;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.92;
    letter-spacing: 1.4px;
    color: #fff;
    cursor: pointer;

}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

a {
    color: #42b983;
}
</style>