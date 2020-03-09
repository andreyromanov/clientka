<template>
	<div>
		<div class="container my-5">
			<div class="row">
				<div class="col-md-3" v-for="product in info" :key="product.id" >
					<div style="height: 200px" class="text-center">
			          <img :src="product.image" style="height: 100%;width: 100%">
			          {{product.price}} $
			        </div>

			        <div style="background-color: #fff;padding: 10px 0;">
			        	<router-link to="#">
			        		<button @click="addToBasket(product.id)" class="btn btn-success btn-lg mt-4 px-5">
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

  methods: {
  		addToBasket: function(item){
  			alert(item)
  	} 
  },

  mounted() {
    axios
      .get('http://localhost:8000/api/products')
      	.then(response => {
        //this.info = response.data;
        this.info = Object.entries(response.data).slice(0,3).map(entry => entry[1]);
      });
  }
};
</script>