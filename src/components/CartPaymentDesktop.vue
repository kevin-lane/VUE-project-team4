<script setup>
import MessageIcon from './icons/MessageIcon.vue'
import LocationIcon from './icons/LocationIcon.vue'

import SwishModal from '../components/SwishModal.vue'
import KlarnaModal from '../components/KlarnaModal.vue'
import HeroSection from '../components/HeroSection.vue'
</script>

<template>
  <div v-if="this.isModalOpen">
    <HeroSection v-bind:class="{ blur: isModalOpen }" />
  </div>

  <div>
    <!-- Imported the payment cards components -->

    <SwishModal v-if="swishPay" />
    <KlarnaModal v-if="klarnaPay" />
  </div>

  <div v-if="cartPay" id="container">
    <div>
      <section class="sections" id="kassa">
        <h3 class="section-heading">Checkout</h3>
        <div id="section">
          <img id="item-img" src="../assets/images/handbag-g36b7321fd_640.jpg" alt="" />
          <!--<span id="title">Prima väskor</span>
          <span id="price">399kr</span>
          <span id="location">Varan finns i Hägersten </span>
          <span class="icon-holders" id="location-icon"><LocationIcon /></span> -->
          <div id="produckt-info-container">
            <h4 id="product-name">Prima väskor</h4>
            <p id="price">399 kr</p>
          </div>
          <!--Här börjar place- group container-->
          <div id="place-group">
            <p id="p-place">Varan finns i Hornstull</p>
            <LocationIcon @click="navigateAddress" id="icon-place" />
            <!-- <p id="p-icon">!</p> -->
          </div>
        </div>
      </section>
      <hr />
      <section class="sections" id="seller">
        <h3 id="seller-heading" class="section-heading">Säljare:</h3>
        <div id="seller-container">
          <img :src="getPicById(1).profilBild" id="profil-img" />
          <span id="advertiser-name">Sixten Olsson</span>
        </div>

        <div id="chatt-group">
          <p id="chatt-text">Skriv till `` Sixten:</p>
          <MessageIcon @click="showText" id="chattIcon" />
        </div>
        <div class="textArea" v-if="showTextarea">
          <textarea cols="20" rows="6" placeholder="Write a message .."></textarea>
          <button @click="sendText">Send</button>
        </div>
      </section>
      <hr />

      <section class="sections" id="payment">
        <h3 class="section-heading">Betalning</h3>
        <img
          id="swish"
          @click="swishIcon"
          class="payment-options"
          src="../assets/images/swish.png"
          alt=""
        />
        <img
          id="klarna"
          @click="klarnaIcon"
          class="payment-options"
          src="../assets/images/klarna.png"
          alt=""
        />
      </section>
    </div>
  </div>
</template>

<script>
import products from '/public/products.json'
export default {
  data() {
    return {
      showTextarea: false,
      cartPay: true,
      klarnaPay: false,
      swishPay: false,
      isModalOpen: false,
      images: products
    }
  },
  computed: {
    getPicById: function () {
      return function (id) {
        return this.images.find((image) => image.id === id)
      }
    }
  },
  methods: {
    showText() {
      this.showTextarea = true
    },
    sendText() {
      this.showTextarea = false
    },
    klarnaIcon() {
      this.klarnaPay = true
      this.swishPay = false
      this.cartPay = false
      this.isModalOpen = true
    },
    // The same conditions go here but on the second paying method
    swishIcon() {
      this.swishPay = true
      this.klarnaPay = false
      this.cartPay = false
      this.isModalOpen = true
    },
    // Navigating to the seller address
    navigateAddress() {
      const navLink = 'https://goo.gl/maps/7RpXKb1U8yKgcgjA6'
      window.location.href = navLink
    }
  }
}
</script>

+
<style scoped>
#container {
  background-color: white;
  width: 730px;
  height: 780px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 25%;
}
.sections {
  padding: 2rem;
}
#item-img {
  width: 130px;
  height: 130px;
  border: 1px solid;
  left: 3rem;
}
#title {
  position: absolute;
  font-weight: 700;
  top: 8rem;
  left: 14rem;
}
#price {
  left: 4em;
  font-weight: 700;
}
#location {
  right: 6rem;
  bottom: 2rem;
  position: absolute;
}
#persona-img {
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 50%;
  left: 3rem;
}

#seller-heading {
  text-align: left;
  left: 3rem;
  bottom: 1rem;
}
#advertiser-name {
  left: 4rem;
  bottom: 1rem;
}
#advertiser-message {
  position: absolute;
  right: 6rem;
  top: 4rem;
}
.icon-holders {
  position: absolute;
  right: 3em;
  bottom: 3em;
}
#location-icon {
  bottom: 2rem;
}
hr {
  margin: auto;
  width: 692px;
}
.section-heading {
  text-align: center;
  font-weight: bold;
}
.payment-options {
  width: 160px;
  height: 160px;
  margin: 5rem;
}

#chatt-group {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 2em;
}
#chattIcon {
  cursor: pointer;
}
.textArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  row-gap: 10px;

  margin: 10px;
}
.textArea button {
  width: 60px;
  background-color: rgb(45, 177, 45);
  color: white;
  border: none;
}
#seller-container {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}

#container {
  display: flex;
  justify-content: center;
}
#section {
  display: flex;
  gap: 2em;
  margin-top: 1em;
  column-gap: 25px;
}
#place-group {
  display: flex;
  margin-left: 25%;
  justify-content: end;
}
#p-place {
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: #545454;
}

#icon-place {
  margin-left: 0.3em;
  cursor: pointer;
}
#profil-img {
  background-color: aquamarine;
  width: 80px;
  height: 85px;
  border-radius: 50%;
  margin: 1em 0 0 2em;
  object-fit: cover;
}

.blur {
  filter: blur(5px);
  pointer-events: none;
}
</style>

<!--
<template>
  <div class="flex">
  <div id="container">
    <h3 class="section-heading">Kassa</h3>
    <section class="sections" id="kassa">
      <img id="item-img" src="../assets/images/handbag-g36b7321fd_640.jpg" alt="">

      <div id="title-price-flex">
        <span id="title">Prima väskor</span>
        <span id="price">399kr</span>
      </div>
      <span id="location">Varan finns i Hägersten </span>
      <span class="icon-holders" id="location-icon"><LocationIcon /></span>

    </section>
    <hr>
    <h3 id="seller-heading" class="section-heading">Säljare:</h3>
    <section class="sections" id="seller">
      <div id="seller-info">
      <img id="persona-img" src="../assets/images/man-869215_640.jpg" alt="">
      <span id="advertiser-name">Sixten Olsson</span>
      </div>
      <span id="advertiser-message">Skriv till Sixten Olsson: </span>
      <span class="icon-holders" id="message-icon"><MessageIcon /></span>
    </section>
    <hr>

    <section class="sections" id="payment">
      <h3 class="section-heading">Betalning</h3>
      <img class="payment-options" src="../assets/images/swish.png" alt="">
      <img class="payment-options" src="../assets/images/klarna.png" alt="">
    </section>
  </div>
  </div>
</template>

<style>

.flex {
  display: flex;
    justify-content: center;
}

  #container{
    background-color: white;
    width: 730px;
    height: 684px;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  }
  .sections{
    padding: 2rem;

  }
  #item-img{
    width: 130px;
    height: 130px;
    border: 1px solid;
    left: 3rem;
  }
  #title{
    /* position: absolute; */
    font-weight: 700;
    top: 8rem;
    left: 14rem;
  }
  #price{
    left: 4em;
    font-weight: 700;
  }
  #location{
    right: 6rem;
    bottom: 2rem;
    /* position: absolute; */
  }
#message-icon{
  margin-right: 5vh;
}
#item-img{
  border: none;
  border-radius: 6px;
  object-fit: cover;
}
  #seller {
    display: flex;
    justify-content: space-between;

  }

  #seller-info > img {
    margin-right: 2vh;
    margin-left: 20px;

  }

   #title-price-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
   }

  #kassa {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #persona-img{
    width: 40px;
    height: 40px;
    border: 1px solid;
    border-radius: 50%;
    left: 3rem;
    object-fit: cover;
  }
  #seller-heading{
    text-align: left;
    left: 3rem;
    bottom: 1rem;
    margin-left: 5vw;
  }
  #advertiser-name{
    left: 4rem;
    bottom: 1rem;
  }
  #advertiser-message{
    /* position: absolute; */
    right: 6rem;
    top: 4rem;
  }
  .icon-holders{
    /* position: absolute; */
    right: 3em;
    bottom: 3em;
  }
  #location-icon{
    bottom: 2rem;
  }
  hr{
    margin: auto;
    width: 692px;
  }
  .section-heading{
    text-align: center;
    font-weight: bold;
    margin-top: 2vh;
  }
  .payment-options{
    width: 160px;
    margin: 5rem;
  }
</style>
-->
