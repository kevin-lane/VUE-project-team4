<script setup>

// import DesktopNav from '../components/DesktopNav.vue'
import LoginForm from '../components/LoginForm.vue';
import mainCards from '../components/mainCards.vue'

</script>

<template>
  <main  v-if="$store.state.loggedIn === false">
    <LoginForm />
  </main>
  <main v-else>
    <mainCards/>
  </main>


<!-- <DesktopNav/> -->



</template>
<script>
</script>
<style>

</style>
