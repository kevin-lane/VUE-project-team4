
<script setup>
import PaymentDenial from './PaymentDenial.vue'
import PaymentAproved from './PaymentAproved.vue'
</script>

<template>
  <PaymentAproved v-if="succeedWindow" />
  <PaymentDenial v-if="denialWindow" />

  <div v-if="showModal" class="MyModal">
    <div class="modal-in">
      <h3>Are you sure you want to continue with Swish?</h3>
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
      this.$router.push('./PaymentAproved') //   the payment approved component
    },
    cancelButton() {
      this.denialWindow = true
      this.succeedWindow = false
      this.showModal = false
      this.$router.push('./PaymentAproved') // Jumping to the payment approved component
    }
  }
}
</script>
<style>
.MyModal {
  width: 500px;
  height: 200px;
  background-color: #4f7598;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  border: solid 2px transparent;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 2px rgb(253, 252, 252);
  position: fixed;
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

@media screen and (max-width: 720px) {
  .MyModal {
    max-width: 75% !important;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-27%, -1%);
    font-size: small;
  }
}
</style>
