<script setup>
  import MessageIcon from './icons/MessageIcon.vue';
  import LocationIcon from './icons/LocationIcon.vue';
</script>

<template>
  <div id="container">
    <section class="sections" id="kassa">
      <h3 class="section-heading">Kassa</h3>
      <img id="item-img" src="../assets/images/handbag-g36b7321fd_640.jpg" alt="">
      <span id="title">Prima väskor</span>
      <span id="price">399kr</span>
      <span id="location">Varan finns i Hägersten </span>
      <span class="icon-holders" id="location-icon"><LocationIcon /></span>

    </section>
    <hr>
    <section class="sections" id="seller">
      <h3 id="seller-heading" class="section-heading">Säljare:</h3>
      <img id="persona-img" src="../assets/images/man-869215_640.jpg" alt="">
      <span id="advertiser-name">Sixten Olsson</span>
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
</template>

<style>
  #container{
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
    position: absolute;
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
    position: absolute;
  }
  #persona-img{
    width: 40px;
    height: 40px;
    border: 1px solid;
    border-radius: 50%;
    left: 3rem;
  }
  #seller-heading{
    text-align: left;
    left: 3rem;
    bottom: 1rem;
  }
  #advertiser-name{
    left: 4rem;
    bottom: 1rem;
  }
  #advertiser-message{
    position: absolute;
    right: 6rem;
    top: 4rem;
  }
  .icon-holders{
    position: absolute;
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
  }
  .payment-options{
    width: 160px;
    height: 160px;
    margin: 5rem;
  }
</style>
