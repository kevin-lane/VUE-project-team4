<script setup>
import PaymentDenial from './PaymentDenial.vue'
import PaymentAproved from './PaymentAproved.vue'
import CartPaymentDesktop from './CartPaymentDesktop.vue'
import CartPaymentMobile from './CartPaymentMobile.vue'
</script>

<template>
  <CartPaymentDesktop v-if="payClicked" />
  <CartPaymentMobile v-if="payClicked" />
  <PaymentAproved v-if="succeedWindow" />
  <PaymentDenial v-if="denialWindow" />

  <div v-if="showModal" class="MyModal">
    <div class="modal-in">
      <h3>Are you sure you want to continue with Klarna?</h3>
      <div>
        <button @click="approButton">Ok</button>
        <button @click="cancelButton">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      succeedWindow: false,
      denialWindow: false,
      showModal: true
    }
  },
  methods: {
    approButton() {
      this.succeedWindow = true
      this.denialWindow = false
      this.showModal = false
      this.payClicked = false
      this.$router.push('./PaymentAproved') // Jumping to the payment approved component
    },
    cancelButton() {
      this.denialWindow = true
      this.succeedWindow = false
      this.showModal = false
      this.payClicked = false
      
      this.$router.push('./PaymentDenial ') // Jumping to the payment approved component
    }
  }
}
</script>
<style>
.MyModal {
  --gap: 15px;

  top: 0;
  left: 0;
  width: 500px;
  height: 200px;
  background-color: #4f7598;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 33%;
}
.modal-in {
  display: flex;
  flex-direction: column;
  row-gap: 65px;
  justify-content: center;
  align-items: center;
}
.modal-in button {
  background-color: #3aa05d;
  color: white;
  border: none;
  margin-left: 20px;
  width: 70px;
  cursor: pointer;
}
</style>
