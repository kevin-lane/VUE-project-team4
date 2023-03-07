<script setup>
  import SquaredQuestionMark from './icons/SquaredQuestionMark.vue';
</script>

<template>
  <div class="container">
    <p>Är du säker att du vill fortsätta till kassan</p>
    <SquaredQuestionMark />
    <div class="button-container">
      <button id="left-button" class="buttons" >Avbryt</button>
      <router-link to="/checkout" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" id="right-button" class="buttons">Fortsätt</button>
                </router-link>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .container{
    position: relative;
    background-color: #D0F2CC;
    width: 360px;
    height: 200px;
    text-align: center;
    padding: 2rem;
    border-radius: 6px;
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
</style>
