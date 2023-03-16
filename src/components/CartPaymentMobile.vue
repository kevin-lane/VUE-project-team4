<script setup>
import IconChatt from '../components/icons/IconChatt.vue'
import IconPlace from '../components/icons/IconPlace.vue'
import SwishModal from './SwishModal.vue'
import KlarnaModal from './KlarnaModal.vue'
import PaymentAproved from './PaymentAproved.vue'
import HeroSection from './HeroSection.vue'
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

  <PaymentAproved v-if="paycom" />
  <PaymentDenial v-if="paycom" />

  <!-- Using v-if directive here to hide the checkout card when the user chooses a payment method -->
  <div>
    <div id="flex-container" v-if="cartPay">
      <div id="wrapp">
        <h3 id="checkout-label">checkout</h3>
        <div id="section">
          <img src="../assets/football-ge17f0a6a0_1920.jpg" alt="fotbollsskor" />
          <!--Här börjar produkt information container-->
          <div id="produckt-info-container">
            <h4 id="product-name">Nike sneaker</h4>
            <p id="size">Size 40</p>
            <p id="price">$80.00</p>
          </div>
        </div>
        <!--Här börjar place- group container-->
        <div id="place-group">
          <p id="p-place">Varan finns i Hornstull</p>
          <IconPlace @click="navigateAddress" id="icon-place" />
          <!-- <p id="p-icon">!</p> -->
        </div>
        <hr id="hr-top" />

        <!--Här börjar seller container-->
        <div id="seller-container">
          <h3 id="seller">Säljare:</h3>
          <div id="profile-group">
            <!-- <div id="profil-img">bild-p</div> -->
            <!-- <img id="profil-img" src="../assets/happy-ge5620ff7a_1920.jpg" alt=""> -->
            <!--<div id="profil-img"></div> -->

            <img :src="getPicById(1).profilBild" id="profil-img" />
            <p id="profile-name">Sixten Olsson</p>
          </div>

          <!-- The click event on the chat icon will show a text field with a send button -->
          <div id="chatt-group">
            <p id="chatt-text">Skriv till `` Sixten:</p>
            <IconChatt @click="showText" />
          </div>
          <div class="textArea" v-if="showTextarea">
            <textarea cols="20" rows="6" placeholder="Write a message .."></textarea>
            <button @click="sendText">Send</button>
          </div>

          <hr id="hr-middle" />
          <h3 id="pay-header">Betalning</h3>

          <!-- Two click events on the payment methods  -->
          <div id="pay-option">
            <img id="swish" @click="swishIcon" src="../assets/swish logo primary SVG.svg" alt="" />

            <img
              id="klarna"
              @click="klarnaIcon"
              src="../assets/Klarna marketing badge (pink rgb.svg).svg"
              alt=""
            />
          </div>
        </div>
      </div>
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
    // When any of the payment methods is clicked, a modal will pop up
    klarnaIcon() {
      this.klarnaPay = true
      this.swishPay = false
      this.cartPay = false
      this.isModalOpen = true

      //this.cartPay = false
    },
    // The same conditions go here but on the second paying method
    swishIcon() {
      this.swishPay = true
      this.klarnaPay = false
      this.cartPay = false
      this.isModalOpen = true
    },

    // If the user clicks on the chat icon then a text field will show up
    showText() {
      this.showTextarea = true
    },
    // The text field will close up when user submit the message
    sendText() {
      this.showTextarea = false
    },
    navigateAddress() {
      const navLink = 'https://goo.gl/maps/7RpXKb1U8yKgcgjA6'
      window.location.href = navLink
    }
  }
}
</script>
<style scoped>
#flex-container {
  display: flex;
  justify-content: center;
}

#wrapp {
  background-color: rgba(245, 245, 245, 1);
  width: 390px;
  height: 581px;
  margin-bottom: 3em;
}

#produckt-info-container {
  display: block;
  margin-top: 0.9em;
}

#checkout-label {
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin-top: 1em;
}

#product-name {
  font-weight: 700;
  font-size: 15px;
}

#size {
  margin-top: 0.5em;
}

#price {
  margin-top: 0.5em;
}

img {
  width: 144px;
  height: 116px;
  border-radius: 14px;
  /* background-color: red; */
  margin: 0.5em 0 0 3em;
}

#section {
  display: flex;
  gap: 2em;
  margin-top: 1em;
}

#hr-top {
  width: 357px;
  margin: 1.5em 1em 0 1em;
}

#place-group {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 1.5em 1.7em 0 0;
}

#p-place {
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: #545454;
}

#icon-place {
  margin-left: 0.3em;
}

#seller {
  margin: 0.5em 0 0 2em;
  font-weight: 600;
}

#profil-img {
  background-color: aquamarine;
  width: 2.5em;
  height: 2.5em;
  border-radius: 1.25em;
  margin: 1em 0 0 2em;
  object-fit: cover;
}

#profile-name {
  margin: 1.3em 0 0 0.7em;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  color: rgba(0, 0, 0, 1);
}

#profile-group {
  display: flex;
  flex-direction: row;
}

#chatt-group {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 2em;
}

#chatt-text {
  font-size: 13px;
  font-weight: 400px;
  font-style: normal;
  margin-right: 1em;
  color: rgba(84, 84, 84, 1);
}

#hr-middle {
  margin-top: 1.4em;
  margin: 1.4em 1em 0 1em;
  width: 357px;
  height: 1px;
  color: rgba(155, 155, 155, 1);
}

#pay-header {
  text-align: center;
  margin-top: 0.3em;
  color: rgba(84, 84, 84, 1);
}

#pay-option {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 2em 3em 0 0;
}

#klarna {
  width: 82px;
  height: 38px;
  border-radius: 4px;
}

#swish {
  width: 82px;
  height: 38px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
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

.blur {
  filter: blur(5px);
  pointer-events: none;
}
</style>
