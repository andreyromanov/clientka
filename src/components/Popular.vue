<template>
	<div style="background-color: lightblue">
	<div class="container border-top py-md-5">
		<h3 class="mb-5">Популярные категории</h3>
  <vueper-slides
  class="no-shadow"
  :visible-slides="4"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide class="border" v-for="category in info" :key="category.id" >
    <template v-slot:content>
      <router-link to="/about">
      <div>
        <div style="height: 230px">
          <img :src="category.image" style="height: 100%;width: 100%">
        </div>
        <div style="background-color: #fff;padding: 10px 0;" class="border">{{ category.name }}</div>
      </div>
      </router-link>
    </template>
  </vueper-slide>
</vueper-slides>

	<router-link to="/about">
		<button class="btn btn-warning btn-lg mt-5">
			Все категории
		</button>
	</router-link>

	</div>
</div>
</template>
<script>

import axios from 'axios';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default{
  components: { 
  	VueperSlides, VueperSlide 
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('http://localhost:8000/api/categories')
      	.then(response => {
        this.info = response.data;
      });
  }
};
</script>
<style type="text/css">
	.vueperslides__bullets{
		display: none;
	}
</style>
