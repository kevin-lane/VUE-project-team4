<script setup>
</script>

<template>
    <div id="product-container"><!--//Oscar-->
    <div v-for="product, index in products" :key="product.id" class="card" :class="product.filter"><!--Loopar igenom products.json arrayen och renderar varje product som ett "card"--><!--v-for, v-bind-->
      <div class="bildcard">
        <img :src="product.picture" :alt="product.title" class="cardimage" /><!--Använder v-bind för att binda product taggarna med respektive css klass-->
        <p class="profilName">{{ product.profilName }}</p>
        <img :src="product.profilBild" :alt="product.title" class="profilimage" />
      </div>
      <div class="infocard">
        <h2 class="cardTitle">{{ product.title }}</h2>
        <p class="infotitel">Info:</p>
        <p class="cardPris">{{ product.price }}</p>
        <p class="cardText">{{ product.info }}</p>
        <button @click="emitWish(index)" class="gillaknapp"></button>
        <button class="köpknapp">Köp</button>
      </div>
    </div>
  </div>
</template>
<script scoped>//Oscar
export default {//Export default
  emits: ['wishlist'],
  data() {
    return {
      products: [],//returnar array från array med information som vi bygger "cardsen" med
      info: null
    };
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
        this.info = data;
      });
  },
  methods: {
  emitWish(i){
    this.$emit('wishlist', { image: this.info[i].picture, price: this.info[i].price})


  }
}
};
</script>

<style scoped>/* //Oscar */
 *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
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
  }
  .profilimage{
    position: absolute;
    width: 40px;
    height: 40px;
    left: 47px;
    top: 53px;
    border-radius: 50%;
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
