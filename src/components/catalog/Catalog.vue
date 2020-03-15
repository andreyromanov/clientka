<template>
	<div>
		<div class="container my-5">
			<div class="row">
				<div class="col-md-3  my-2" v-for="product in info" :key="product.id" >
          <div class="border box-shadow px-2 catalog-item">
					<div style="height: 200px;" class="">
			       <img :src="product.image"  class="image-item">     
			    </div>

	         <div class="row pt-3">
                <div class="col-md-5 pt-2">
                   <b style="font-size: 22px;">{{product.price}} $</b>
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
  	},
    addToFav: function(item){
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