<template>
    <div class="main">
        <h1>Klientka Shop</h1>
        <h3>Магазин лучших товаров</h3>
        <router-link to="/catalog">
            <button class="btn btn-danger btn-lg px-5">
                Купить
            </button>
        </router-link>
    </div>
</template>
<style type="text/css">
.main {
    position: relative;
    background-color: #c7b39b;
    background-size: cover;
    height: 500px;
}

.main button {
    position: relative;
    top: 300px;
}

.main h1 {
    position: relative;
    top: 250px;
}

.main h3 {
    position: relative;
    top: 250px;
}
</style>