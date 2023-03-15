<script setup>
  import MessageIcon from './icons/MessageIcon.vue';
  import LocationIcon from './icons/LocationIcon.vue';
</script>

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
