<script setup>

  import LoginForm from '../components/LoginForm.vue';
  import CreateAccount from '../components/CreateAccount.vue';
  import CartPaymentDesktop from '../components/CartPaymentDesktop.vue';
</script>

<template>
  <main>

    <h1>Instabuy</h1>
    <CartPaymentDesktop />
    <LoginForm />
    <CreateAccount />

  </main>
</template>
