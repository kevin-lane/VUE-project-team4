<script setup>
import SearchForm from '../components/SearchForm.vue';
import CartPaymentMobile from '../components/CartPaymentMobile.vue';
import PaymentDenial from '../components/PaymentDenial.vue';
import PaymentAproved from '../components/PaymentAproved.vue';
import ProfilePage from '../components/ProfilePage.vue';
</script>

<template>
  <main>
    <h1>Instabuy</h1>
    <SearchForm />
    <CartPaymentMobile />
    <PaymentDenial />
    <PaymentAproved />
    <ProfilePage />
  </main>
</template>
