<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
export default {
  data() {
    return {
      screen: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.onScreenResize)
  },
  methods: {
   onScreenResize() {
      this.screen = window.innerWidth
    }
  }
}
</script>

<template>

    <!-- Create nav bar  -->
      <!-- Using bootstrap template and icons -->

  <div class="nav" v-if="screen >= 730">
    <h1><router-link to="/home" >Instabuy</router-link></h1>
    <nav class="navbar navbar-light fixed-top">
      <div class="container-fluid">

          <!-- Nav bar search item and liked items icons  -->
        <div id="icons">
          <router-link v-if="$store.state.wishClass == false" to="/wishlist"><i class="bi-suit-heart"></i></router-link>
          <router-link v-else to="/wishlist"><i class="bi-suit-heart" id="red"></i></router-link>
          <a href=""> <i class="bi-search"></i></a>
        </div>
        <!-- Hamburger menu button starts here   -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-light"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Instabuy</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
            <!-- Hamburger menu links   -->
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link" to="/home">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/add">Create post</router-link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div v-if="screen <= 730">
   <h1><router-link to="/home" >Instabuy</router-link></h1>
   <nav class="navbar">

        <router-link to="/home"><i class="bi bi-house-fill"></i> </router-link>
        <router-link to=""><i class="bi bi-search"></i> </router-link>
        <router-link to="/add"><i class="bi bi-plus-lg"></i> </router-link>
        <router-link to="/profil"><i class="bi bi-person-fill"></i> </router-link>
    </nav>
  </div>

  <router-view/>

</template>


<style scoped>


@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');
/* Query for desktop */
@media screen and (min-width: 730px) {


ul {
  list-style: none;
}
li {
  display: flex;
  column-gap: 15px;
  margin-bottom: 10px;
  align-items: center;
}
a {
  color: black;
}

a:link {
  text-decoration: none;
}


.bi:hover {
  cursor: pointer;
}

h1 {
  text-align: left;
  margin-left: 10px;
}
.bi-suit-heart {
  display: contents;
}

.bi {
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
}


#navBar {
  margin-top: 100px;
}

#icons {
  display: flex;
  column-gap: 10px;
  margin-left: 90%;


}

#red{
  color:red
}



.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    border: none;
    box-shadow: none;
}

}
/* Query for mobile */
@media screen and (max-width: 730px) {

  .navbar {
    overflow: hidden;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
}

.navbar a {
    display: inline-block;
    color: #2c2c2c;
    padding: 16px 25px;
    text-decoration: none;
    font-size: 17px;
    text-align: center;
}
h1{
  text-align: center;
  margin-top: 2vh;
}

a{
  text-decoration: none;
  color: black;
}
}






</style>
