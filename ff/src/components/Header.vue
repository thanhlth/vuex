<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/profile" activeClass="active" 
            ><a>Profile</a></router-link
          >
        </li>
        <li class="nav-item active">
          <router-link to="/stocks" activeClass="active" 
            ><a>Stock</a></router-link
          >
        </li>
        
        <strong> Funds: {{funds | currency }} </strong>
        <li class="nav-item active"><a href="#" @click="endDay"> EndDay </a></li>
        
            <li class="nav-item active"><a  href="#">Save</a></li>
            <li class="nav-item active"><a  href="#">Load</a></li>
            
          </ul>
        
        
      
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      isDropdownOpen:false
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay(){
      this.randomizeStocks();
    }
  }
}
</script>script
<style >
body{
    padding: 30px;
}
.nav-item{
  margin-right: 20px;
}
.li{
  margin: 10px;
}
</style>