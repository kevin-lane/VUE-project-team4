<template>
  <!-- Create nav bar  -->
  <!-- Using bootstrap template and icons -->
  <div class="nav">
    <nav class="navbar navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h1>Instabuy</h1>
        </a>
        <!-- Nav bar search item and liked items icons  -->
        <div id="icons">
          <a href=""><i class="bi-suit-heart"></i></a>
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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Create post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Wishlist</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Inbox</a>
              </li>

              <!-- Search bar  -->
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Nav bar category starts here  -->

  <div id="container">
    <div id="navBar">
      <ul>
        <li>
          <i class="bi bi-lamp-fill"></i>
          <a href="">Furniture </a>
        </li>
        <li>
          <i class="bi bi-plus-square-fill"></i>
          <a href=""> Health</a>
        </li>

        <li>
          <i class="bi bi-music-note"></i>
          <a href=""> Music</a>
        </li>
        <li>
          <i class="bi bi-hypnotize"></i>
          <a href=""> Sport</a>
        </li>

        <li>
          <i class="bi bi-train-front-fill"></i>
          <a href=""> Trip</a>
        </li>

        <li>
          <i class="bi bi-handbag-fill"></i>
          <a href=""> Fashion</a>
        </li>

        <li>
          <i class="bi bi-cup-hot-fill"></i>
          <a href=""> Leisure</a>
        </li>

        <li>
          <i class="bi bi-gem"></i>
          <a href=""> Jewelry</a>
        </li>

        <li>
          <i class="bi bi-grid-3x3-gap-fill"></i>
          <a href="">Other </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');

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
a:hover {
  background-color: rgb(117, 117, 117);
  color: white;
}
h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
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
</style>
