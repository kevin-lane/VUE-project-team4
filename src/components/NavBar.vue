<template>
  <div id="navBar">
    <div id="logo">
      <h1>Instabuy</h1>
      <i class="bi bi-suit-heart"></i>
    </div>

    <ul>
      <li>
        <i class="bi bi-telephone"> </i>
        <a href=""> Tech</a>
      </li>
      <li>
        <i class="bi bi-plus-square"></i>
        <a href=""> Health</a>
      </li>

      <li>
        <i class="bi bi-music-note"></i>
        <a href=""> Music</a>
      </li>
      <li>
        <i class="bi bi-dribbble"></i>
        <a href=""> Sport</a>
      </li>

      <li>
        <i class="bi bi-train-front"></i>
        <a href=""> Train</a>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');

@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');

ul {
  display: flex;
  justify-content: space-around;
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
