<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div id="app">
            <h1>Bitcoin Price Index</h1>
            <div v-for="currency in info" class="currency" v-bind:key="currency">
                {{ currency.description }}:
                <span class="lighten">
                    <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            info: null,
            loading: true,
            errored: false
        };
    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2);
        }
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                this.info = response.data.bpi;
            });
    }
};
</script>