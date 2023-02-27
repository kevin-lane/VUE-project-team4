<template>
  <div id="container">
    <section class="sections" id="kassa">
      <h3 class="section-heading">Kassa</h3>
      <img id="item-img" src="" alt="">
      <h3>Prima väskor</h3>
      <span>399kr</span>
      <span id="location">Varan finns i Hägersten</span>
    </section>
    <hr>
    <section class="sections" id="seller">
      <h3 id="seller-heading" class="section-heading">Säljare:</h3>
      <span id="advertiser-name">Sixten Olsson</span>
      <span id="advertiser-message">Skriv till Sixten Olsson</span>
    </section>
    <hr>

    <section class="sections" id="payment">
      <h3 class="section-heading">Betalning</h3>
    </section>
  </div>
</template>

<style>
  #container{
    width: 730px;
    height: 684px;
    border: 1px solid;
  }
  #item-img{
    width: 130px;
    height: 130px;
    border: 1px solid;
  }
  #location{
    right: 0;
    position: absolute;
  }
  #seller-heading{
    text-align: left;
    left: 3rem;
  }
  #advertiser-name{
    left: 5rem;
  }
  #advertiser-message{
    position: absolute;
    right: 6rem;
  }
  hr{
    margin: auto;
    width: 692px;
  }
  .section-heading{
    text-align: center;
  }
</style>
