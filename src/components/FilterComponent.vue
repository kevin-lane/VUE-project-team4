<template>
  <!-- Nav bar category starts here  -->
  <div v-if="screenWidth >= 1100">
    <div id="navBar">
      <ul>
        <li>
          <i class="bi bi-lamp-fill"></i>
          <a href=""><h3>Furniture</h3> </a>
        </li>
        <li>
          <i class="bi bi-plus-square-fill"></i>
          <a href=""><h3>Health</h3> </a>
        </li>

        <li>
          <i class="bi bi-music-note"></i>
          <a href=""> <h3>Music</h3></a>
        </li>
        <li>
          <i class="bi bi-hypnotize"></i>
          <a href=""><h3>Sport</h3></a>
        </li>

        <li>
          <i class="bi bi-train-front-fill"></i>
          <a href=""><h3>Trip</h3></a>
        </li>

        <li>
          <i class="bi bi-handbag-fill"></i>
          <a href=""><h3>Fashion</h3></a>
        </li>

        <li>
          <i class="bi bi-cup-hot-fill"></i>
          <a href=""><h3>Leisure</h3></a>
        </li>

        <li>
          <i class="bi bi-gem"></i>
          <a href=""> <h3>Jewelry</h3></a>
        </li>

        <li>
          <i class="bi bi-grid-3x3-gap-fill"></i>
          <a href=""><h3>Other</h3> </a>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="screenWidth <= 1100">

    <div id="navBar">
      <ul>
        <li>
          <i class="bi bi-telephone"> </i>
          <a href=""> <h4>Tech</h4></a>
        </li>
        <li>
          <i class="bi bi-plus-square"></i>
          <a href=""><h4>Health</h4></a>
        </li>

        <li>
          <i class="bi bi-music-note"></i>
          <a href=""> <h4>Music</h4></a>
        </li>
        <li>
          <i class="bi bi-dribbble"></i>
          <a href=""> <h4>Sport</h4></a>
        </li>

        <li>
          <i class="bi bi-train-front"></i>
          <a href=""> <h4>Trip</h4></a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');

@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');

@media screen and (min-width: 1100px){/*desktopfilter */

ul {
  list-style: none;
}
li {
  display: flex;
  column-gap: 15px;
  margin-bottom: 20px;
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

.bi-suit-heart {
  display: contents;
}

.bi {
  display: flex;
  flex-direction: column;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 30px;
  padding: 20px;
}

#navBar {
  /* margin-top: 100px; */
  position: fixed;
  width: 713px;
  height: 65px;/* 65px */
  left: 15px;
  top: 145px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

#icons {
  display: flex;
  column-gap: 16px;
  margin-left: 78%;
}
}
@media screen and (max-width: 1100px){/*mobilfilter */
  #navBar {
  /* margin-top: 100px; */
  position: fixed;
  width: 95vw;
  height: 100px;/* 65px */
  left: 5px;
  top: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}
  ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  text-align: center;
  margin-right: 20px;
  column-gap: 14px;
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
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 90px;
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


}
</style>
