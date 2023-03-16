<script setup>

// import DesktopNav from '../components/DesktopNav.vue'
import LoginForm from '../components/LoginForm.vue';
import CreateAccount from '../components/CreateAccount.vue';
import mainCards from '../components/mainCards.vue'

</script>

<template>
  <main  v-if="this.$store.state.loggedIn === false">
      <LoginForm  v-if="this.$store.state.newUser === false"/>
      <CreateAccount v-else />
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
