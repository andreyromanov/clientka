<template>
	<div style="background-color: #e1f5fe">
		<div class="container py-3">
      <!--div class="row">
        <span>Смотрите также:</span>
        <label class="ml-3"><router-link to="/textile">Ткани</router-link></label>
        <label class="ml-3"><a href="">Шторы</a></label>
      </div-->
			<div class="row">
				<div class="col-md-3 my-2" v-for="product in info" :key="product.id">
          <h5>
            {{product.title}}
          </h5>
          <div class="border box-shadow p-2 catalog-item" style="background-color: #fff">
  					<div class="item-image-div">
  			       <img :src="product.main_img"  class="image-item">     
  			    </div>

  	         <div class="row pt-3">
                  <div class="col-md-12 text-right">
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
      <div class="row text-right pt-3">
        <div class="col-md-12">
          <span  @click="updateCatalog(page.url)" class="p-2 border" v-for="page in pagination" :key="page.id" v-html="page.text">
            
          </span>
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
      id: 0,
      info: null,
      pagination: null,
      page: 1
    };
  },

  methods: {
  		addToBasket: function(item){
  			alert(item)
  	},
    addToFav: function(item){
        alert(item)
    },
    updateCatalog: function(item){
        this.$router.push({name: 'textile', query : {'page':item} });
        axios
      .get('http://localhost:8000/api/mebtex/catalog?page='+item+'')
        .then(response => {
        this.info = Object.entries(response.data.data.products).map(entry => entry[1]);
        this.pagination = Object.entries(response.data.data.pagination).map(entry => entry[1]);
      });
    }  
  },

  mounted() {
    if(typeof this.$route.query.page !== "undefined"){
      this.page = this.$route.query.page;
    }

    axios
      .get('http://localhost:8000/api/mebtex/catalog?page='+this.page+'')
      	.then(response => {
        this.info = Object.entries(response.data.data.products).map(entry => entry[1]);
        this.pagination = Object.entries(response.data.data.pagination).map(entry => entry[1]);
      });
  }
};
</script>