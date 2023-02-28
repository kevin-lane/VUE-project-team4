<template>
  <div id="container">
    <div id="logo">
      <h1>Instabuy</h1>
      <a href=""> <i class="bi bi-suit-heart"></i></a>
    </div>

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
          <a href=""> Train</a>
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
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-align: center;
  align-content: center;
}
a {
  color: black;
}

a:link {
  text-decoration: none;
}

.bi {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
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

#logo {
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 5px 20px;
}
</style>
