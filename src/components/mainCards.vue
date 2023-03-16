<script setup>
import SquaredQuestionMark from './icons/SquaredQuestionMark.vue';
</script>

<template>
  <!-- <filterButtons/> -->
  <div v-if="screenWidth >= 1100">
  <div id="navBar">
  <ul>
    <li>
      <i class="bi bi-box-fill" @click="selectedFilter = ''"></i>
      <button class="filter-button" @click="selectedFilter = ''"><h3>Alla</h3></button>
    </li>
    <li>
      <i class="bi bi-handbag-fill" @click="selectedFilter = 'Kläder'"></i>
      <button class="filter-button" @click="selectedFilter = 'Kläder'"><h3>Kläder</h3></button>
    </li>
    <li>
      <i class="bi bi-controller" @click="selectedFilter = 'Elektronik'"></i>
      <button class="filter-button" @click="selectedFilter = 'Elektronik'"><h3>Elektronik</h3></button>
    </li>
    <li>
      <i class="bi bi-lamp-fill" @click="selectedFilter = 'Inredning'"></i>
      <button class="filter-button" @click="selectedFilter = 'Inredning'"><h3>Inredning</h3></button>
    </li>
    <li>
      <i class="bi bi-music-note" @click="selectedFilter = 'Fritid'"></i>
      <button class="filter-button" @click="selectedFilter = 'Fritid'"><h3>Fritid</h3></button>
    </li>
    <li>
      <i class="bi bi-hypnotize" @click="selectedFilter = 'Sport'"></i>
      <button class="filter-button" @click="selectedFilter = 'Sport'"><h3>Sport</h3></button>
    </li>
    <li>
      <i class="bi bi-gem" @click="selectedFilter = 'Smycken'"></i>
      <button class="filter-button" @click="selectedFilter = 'Smycken'"><h3>Smycken</h3></button>
    </li>
    <li>
      <i class="bi bi-grid-3x3-gap-fill" @click="selectedFilter = 'Övrigt'"></i>
      <button class="filter-button" @click="selectedFilter = 'Övrigt'"><h3>Övrigt</h3></button>
    </li>
  </ul>
</div>
</div>
<div v-if="screenWidth <= 1100">

<div id="navBar">
  <ul>
    <li>
      <i class="bi bi-box-fill" @click="selectedFilter = ''"> </i>
      <button class="filter-button" @click="selectedFilter = ''"><h3>Alla</h3></button>
    </li>
    <li>
      <i class="bi bi-handbag-fill" @click="selectedFilter = 'Kläder'"></i>
      <button class="filter-button" @click="selectedFilter = 'Kläder'"><h3>Kläder</h3></button>
    </li>

    <li>
      <i class="bi bi-gem" @click="selectedFilter = 'Smycken'"></i>
      <button class="filter-button" @click="selectedFilter = 'Smycken'"><h3>Smycken</h3></button>
    </li>
    <li>
      <i class="bi bi-hypnotize" @click="selectedFilter = 'Sport'"></i>
      <button class="filter-button" @click="selectedFilter = 'Sport'"><h3>Sport</h3></button>
    </li>

    <li>
      <i class="bi bi-grid-3x3-gap-fill" @click="selectedFilter = 'Övrigt'"></i>
      <button class="filter-button" @click="selectedFilter = 'Övrigt'"><h3>Övrigt</h3></button>
    </li>
  </ul>
</div>

</div>

  <!-- <div id="product-container"> -->

    <!-- <div class="filter-buttons">

      <button class="filter-button" @click="selectedFilter = ''">Alla</button>
      <button class="filter-button" @click="selectedFilter = 'Kläder'">Kläder</button>
      <button class="filter-button" @click="selectedFilter = 'Elektronik'">Elektronik</button>
      <button class="filter-button" @click="selectedFilter = 'Inredning'">Inredning</button>
      <button class="filter-button" @click="selectedFilter = 'Fritid'">Fritid</button>
      <button class="filter-button" @click="selectedFilter = 'Sport'">Sport</button>
      <button class="filter-button" @click="selectedFilter = 'Smycken'">Smycken</button>
      <button class="filter-button" @click="selectedFilter = 'Övrigt'">Övrigt</button>


       <div v-for="filter in filters" :key="filter"> -->
  <!-- <button class="filter-button" @click="selectedFilter = filter">{{filter}}</button> -->
<!-- </div> -->


    <!-- </div> -->

    <div v-for="product in filteredProducts" :key="product.id" class="card">

      <div class="bildcard">
        <img :src="product.picture" :alt="product.title" class="cardimage" />
        <p class="profilName">{{ product.profilName }}</p>
        <img :src="product.profilBild" :alt="product.title" class="profilimage" />
      </div>
      <div class="infocard">
        <h2 class="cardTitle">{{ product.title }}</h2>
        <p class="infotitel">Info:</p>
        <p class="cardPris">{{ product.price }}</p>
        <p class="cardText">{{ product.info }}</p>
        <button class="gillaknapp"></button>
        <button class="köpknapp" @click="showContainer = true">Köp</button>
      </div>
      <div v-if="showContainer" class="container">
        <p>Är du säker att du vill fortsätta till kassan</p>
        <SquaredQuestionMark />
        <div class="button-container">
          <button id="left-button" class="buttons" @click="showContainer = false">Avbryt</button>
          <router-link to="/checkout" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" id="right-button" class="buttons">Fortsätt</button>
          </router-link>
        </div>
      </div>
    </div>
  <!-- </div> -->
  </template>


<script scope>
export default {
  data() {
    return {
      products: [],
      selectedFilter: "",
      showContainer: false,
      Kläder: ["Kläder"],
      screenWidth: window.innerWidth,


      };
  },
  computed: {

    filters() {
    const filtersa = new Set();
    this.products.forEach((product) => {
    filtersa.add(product.filter[0]);
  });
  return Array.from(filtersa);
},

    filteredProducts() {
    if (!this.selectedFilter) {
    return this.products;
  } else {
    return this.products.filter((product) => product.filter.includes(this.selectedFilter));
  }
},

  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
      window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth
    },

  }

};
</script>


<style scoped>/* //Oscar */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');

@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');
 *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

.container{
    position: fixed;
    background-color: #D0F2CC;
    width: 360px;
    height: 200px;
    text-align: center;
    padding: 2rem;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-container{
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  .buttons{
    width: 95px;
    height: 46px;
    border-radius: 7px;
    border: none;
    color: white;
    font-size: larger;
    font-weight: bold;
  }
  #left-button{
    background-color: black;
  }
  #right-button{
    background-color: #3AA05D;
  }
  @media screen and (min-width: 1100px){/*desktopfilter */
.filter-button{
  padding: 0;
  border: none;
  background: none;
}
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
  z-index: 9;
}

#icons {
  display: flex;
  column-gap: 16px;
  margin-left: 78%;
}
}
@media screen and (max-width: 1100px){/*mobilfilter */
  .filter-button{
  padding: 0;
  border: none;
  background: none;
}
  #navBar {
  /* margin-top: 100px; */
  position: fixed;
  width: 95vw;
  height: 100px;/* 65px */
  left: 5px;
  top: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 9;

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
h4 {
  font-family: 'montserrat';
  font-size: 14px;
  text-align: left;
  margin-left: 10px;
}
.bi-suit-heart {
  display: contents;
}


}
 @media screen and (min-width: 800px){/*desktop */
  .card {
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    margin: 16px auto;
    padding: 0;
    width: 730px;
    height: 704px;
    top: 204px;
  }
  .cardimage {
    height: 530px;
    width: 730px;
    left: 0px;
    top: 0px;
    border-radius: 6px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 24.57%;

    object-fit: cover;
  }
  .profilimage{
    position: absolute;
    width: 40px;
    height: 40px;
    left: 47px;
    top: 53px;
    border-radius: 50%;

    object-fit: cover;
  }
  .profilName{
    position: absolute;
    width: 169px;
    height: 28px;
    left: 105px;
    top: 59px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #000000;

  }
  .cardTitle{
    position: absolute;
    left: 2.33%;
    right: 51.64%;
    top: 29.52%;
    bottom: 50%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
  .infocard{
    width: 730px;
    height: 210px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 70.17%;
    bottom: 0%;
    background-color: #ffffff;

  }
  .gillaknapp{
    position: absolute;
    left: 82.6%;
    right: 13.42%;
    top: 29.52%;
    bottom: 58.05%;

    background: url(../assets/cards-heart-outline.svg) no-repeat center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 0;
  }
  .köpknapp{
    box-sizing: border-box;

    position: absolute;
    left: 88.08%;
    right: 2.05%;
    top: 76.67%;
    bottom: 10.95%;

    background: #ffffff;
    border: 1.5px solid #000000;
    border-radius: 15px;
  }
  .infotitel{
    position: absolute;
    left: 2.74%;
    right: 92.88%;
    top: 53.81%;
    bottom: 38.1%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  .cardText{
    position: absolute;
    left: 2.74%;
    right: 47.12%;
    top: 70%;
    bottom: 4.29%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    overflow: hidden;
    color: #000000;
  }
  .cardPris{
    font-weight: bold;
    font-size: 20px;

    position: absolute;
    left: 89.86%;
    right: 0%;
    top: 29.52%;
    bottom: 57.14%;

    color: #000000;
  }
}
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
@media screen and (max-width: 800px){/* mobile */
    .card {
    display: block;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 95vw;
    height: 540px;
    top: 185px;
    /* left: 1px; */
    margin: 0 auto;
    margin-bottom: 10px;

  }
  .cardimage{
    position: absolute;
    width: 95vw;
    height: 385px;
    left: 1.1vh;
    top: 0px;
    border-radius: 6px;

    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 24.57%;
  }
  .profilimage{
    position: absolute;
    width: 40px;
    height: 40px;
    left: 18px;
    top: 18px;

    border-radius: 50%;
  }
  .profilName{
    position: absolute;
    width: 169px;
    height: 28px;
    left: 65px;
    top: 25px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #000000;

  }
  .infocard{
    position: absolute;
    width: 95vw;
    height: 155px;
    left: 0%;
    right: 0%;
    top: 70.17%;
    bottom: 0%;
    background-color: #ffffff;

  }
  .cardTitle{
    position: absolute;
    left: 1.6%;
    right: 50.13%;
    top: 8.28%;
    bottom: 66.27%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }
  .gillaknapp{
    background: url(../assets/cards-heart-outline.svg) no-repeat center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 0;

    position: absolute;
    left: 68.53%;
    right: 23.73%;
    top: 11.83%;
    bottom: 72.72%;
  }
  .köpknapp{
    position: absolute;
    left: 79.2%;
    right: 1.6%;
    top: 11.83%;
    bottom: 72.78%;

    background: #ffffff;
    border: 1.5px solid #000000;
    border-radius: 15px;
  }
  .infotitel{
    position: absolute;
    left: 2.4%;
    right: 89.07%;
    top: 38.46%;
    bottom: 51.48%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #000000;

  }
  .cardText{
    position: absolute;
    left: 2.4%;
    right: 0%;
    top: 58.58%;
    bottom: 9.47%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    overflow: hidden;
    color: #000000;
  }
  .cardPris{
    position: absolute;
    left: 49.87%;
    right: 31.47%;
    top: 10.65%;
    bottom: 72.78%;

    font-family: 'Montserrat';
    font-style: bold;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }
}
.card.hidden {
  display: none;
}



</style>
