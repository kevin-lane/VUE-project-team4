<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarMobile from './components/NavbarMobile.vue'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
     <NavbarMobile />
     <HeroSection/>
<RouterView />
</template>

<style scoped>
</style>
