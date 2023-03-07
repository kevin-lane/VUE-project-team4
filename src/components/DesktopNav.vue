<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <!-- Create nav bar  -->
      <!-- Using bootstrap template and icons -->

  <div class="nav">
    <nav class="navbar navbar-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h1>Instabuy</h1>
        </a>
          <!-- Nav bar search item and liked items icons  -->
        <div id="icons">
          <router-link to="/wishlist"><i class="bi-suit-heart"></i></router-link>
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
<!-- TEST FÖR HELVETE -->
  <!-- <nav class="navbar">
        <a class="active" href="#"><i class="bi bi-house-fill"></i> </a>
        <router-link to=""><i class="bi bi-search"></i> </router-link>
        <router-link to="/add"><i class="bi bi-plus-lg"></i> </router-link>
        <router-link to="/profil"><i class="bi bi-person-fill"></i> </router-link>
    </nav> -->

  <router-view/>

</template>


<style scoped>


@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');
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
/* a:hover {
  background-color: rgb(117, 117, 117);
  color: white;
} */
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
  margin-left: 78%;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    border: none;
    box-shadow: none;
}

/* @media screen and (max-width: 730px) {

  .navbar {
    overflow: hidden;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
}

.navbar a {
    display: inline-block;
    color: #2c2c2c;
    padding: 16px 25px;
    text-decoration: none;
    font-size: 17px;
    text-align: center;
}

} */






</style>
