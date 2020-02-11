<template>
	<div>
		<h1 class="mt-5">Подборки</h1>
		<div class="container my-5">
			<div class="row">
				<div class="col-md-4" v-for="category in info" :key="category.id" >
					<div style="height: 400px">
			          <img :src="category.image" style="height: 100%;width: 100%">
			        </div>

			        <div style="background-color: #fff;padding: 10px 0;">
			        	<router-link to="#">
			        		<button class="btn btn-success btn-lg mt-4 px-5">
			        			Купить
			        		</button>
			        	</router-link>
			       </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import axios from 'axios';

export default{
  components: { 
  	 
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
        //this.info = response.data;
        this.info = Object.entries(response.data).slice(0,3).map(entry => entry[1]);
      });
  }
};
</script>