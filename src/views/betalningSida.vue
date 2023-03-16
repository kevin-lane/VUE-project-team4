<script setup>
import CartPaymentDesktop from '../components/CartPaymentDesktop.vue'
import CartPaymentMobile from '../components/CartPaymentMobile.vue'
</script>
<template>
<CartPaymentDesktop v-if="screenW >= 730"/>
<CartPaymentMobile v-if="screenW <= 730"/>
</template>
<style>

</style>

<script>
export default {
    data() {
        return {
            screenW: window.innerWidth,
        }
    },
     mounted() {
        window.addEventListener('resize', this.handleResize) 
     },


    beforeUnmount() {
            window.removeEventListener('resize', this.handleResize) 
    }, 

    methods: {
            handleResize() {      this.screenW = window.innerWidth   
        },
    }
};

</script>
