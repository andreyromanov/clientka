<template>
  <div class="hello">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">Главная</router-link>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/catalog" class="nav-link" href="#">Каталог</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">Контакты</router-link>
          </li>
        </ul>
        <form class="form-inline mx-auto">
          <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Поиск">
          <a class="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit" data-toggle="modal" data-target="#login">Поиск</a>
        </form>
        <ul class="navbar-nav mr-0">
          <li class="nav-item">
            <router-link to="/checkout" class="nav-link" href="#">Избранное</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">
              <font-awesome-icon icon="chart-pie" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">
              <font-awesome-icon icon="user-secret" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
  
  export default {
    name: "NavBar",
    props: {
      msg: String
    },
    components: {
      
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>