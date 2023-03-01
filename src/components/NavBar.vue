<template>
  <div id="container">
    <div id="logo">
      <a href=""><h1>Instabuy</h1></a>
      <a href=""><i class="bi bi-suit-heart"></i></a>
    </div>

    <div id="navBar">
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
          <a href=""> Trip</a>
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
  justify-content: space-around;
  list-style: none;
  text-align: center;
  margin-right: 20px;
  column-gap: 10px;
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
  align-items: center;
  margin: 10px;
}
/*@media only screen and (min-width: 320px) {
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  #container {
    width: 100%;
  }
  .bi {
    padding: 15px;
  }
  a {
    font-size: 12px;
  }
  ul {
    display: flex;
    column-gap: 2%;
  }
  #navBar {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }
} */
</style>
