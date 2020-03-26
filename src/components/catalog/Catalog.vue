<template>
    <div>
        <div class="container my-5">
            <div class="row">
                <span>Смотрите также:</span>
                <label class="ml-3">
                    <router-link to="/textile">Ткани</router-link>
                </label>
                <label class="ml-3"><a href="">Шторы</a></label>
            </div>
            <div class="row">
                <div class="col-md-3 my-2" v-for="product in info" :key="product.id">
                    <h5>
                        {{product.name}}
                    </h5>
                    <div class="border box-shadow p-2 catalog-item">
                        <div class="item-image-div">
                            <img :src="product.image" class="image-item">
                        </div>
                        <div class="row pt-3">
                            <div class="col-md-5 pt-2">
                                <b class="h4">{{product.price}} $</b>
                            </div>
                            <div class="col-md-7 text-right">
                                <button @click="addToFav(product.id)" class="btn btn-primary">
                                    <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
                                </button>
                                <button @click="addToBasket(product.id)" class="btn btn-success ml-2">
                                    <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    components: {

    },
    data() {
        return {
            info: null
        };
    },

    methods: {
        addToBasket: function(item) {
            alert(item)
        },
        addToFav: function(item) {
            alert(item)
        }
    },

    mounted() {
        axios
            .get('http://localhost:8000/api/products')
            .then(response => {
                this.info = Object.entries(response.data).map(entry => entry[1]);
            });
    }
};
</script>