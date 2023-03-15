<script setup>
import SquaredQuestionMark from './icons/SquaredQuestionMark.vue';
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
        <button class="gillaknapp" @click=" active(index, product)" :class="{ active: ListItem.includes(index) }"></button>
        <!-- TESTA KEY????? -->
        <!-- $store.commit('storeWish', product), -->
        <button class="köpknapp" @click="showContainer = true">Köp</button><!--visar popupprompt fönstret-->


      </div>

    <!-- </div> -->
    <div v-if="showContainer" class="container"><!-- V-if för att visa/dölja "popupprompten" -->
      <p>Är du säker att du vill fortsätta till kassan</p>
      <SquaredQuestionMark />
      <div class="button-container">
        <button id="left-button" class="buttons" @click="showContainer = false">Avbryt</button><!--döljer popupprompt fönstret-->
        <router-link to="/checkout" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" id="right-button" class="buttons">Fortsätt</button><!--Routerlink som navigerar till checkout-->
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>
<script scoped>//Oscar
export default {//Export default
  data() {
    return {
      products: [],//returnar array från array med information som vi bygger "cardsen" med
      showContainer: false,//showcontainer false gör så att popupprompten är döljd fdrån start
      isActive: false,
      ListItem: []
    };
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;

      });
  },
  methods: {

    active(index, product){
      this.isActive = !this.isActive;





        if(this.ListItem.includes(index)) {
          this.ListItem.splice(index , 1)


          this.$store.commit('removeWish', index);

      }
      else{
        this.ListItem.push(index)

        this.$store.commit('storeWish', product)

      }

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
.active {

  background: url(../assets/cards-heart-outline-red.svg) no-repeat center;
    background-repeat: no-repeat;
    background-size: contain;
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

  .active {

  background: url(../assets/cards-heart-outline-red.svg) no-repeat center;
    background-repeat: no-repeat;
    background-size: contain;
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
