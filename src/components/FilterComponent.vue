<template>
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
#container {
  height: 100%;
}
</style>
