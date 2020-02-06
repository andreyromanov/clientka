<template>
	<div class="border p-5">
		<div
		    v-for="category in info"
		    class="category"
		    v-bind:key="category.id"
		  >
    {{ category.id }}:{{ category.name }}
  </div>
	</div>
</template>
<script>

import axios from 'axios';

export default{
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
