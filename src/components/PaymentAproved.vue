<script setup>
import IconHappy from '../components/IconHappy.vue'
import IconX from '../components/IconX.vue'
import IconBox from '../components/IconBox.vue'
import IconTruck from '../components/IconTruck.vue'
</script>

<template>
  <div v-if="approvedWindow" id="flex-container">
    <div id="content-container">
      <!-- This click event on the 'X' icon will close the approved shopping window when it's clicked -->
      <IconX @click="approvedlcon" id="x-icon" />
      <h1>Tack för ditt köp</h1>
      <div id="icon-happy">
        <IconHappy />
      </div>
      <h2>Säljaren har mottagit en bekräftelse och kommer skicka varan inom kort.</h2>
      <div id="icon-sendbox">
        <IconTruck />
        <IconBox />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      approvedWindow: true,
      payCom: false
    }
  },
  methods: {
    approvedlcon() {
      this.approvedWindow = false // Approved window card closes and return the user to the homepage
      window.location.reload()
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
#flex-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

#content-container {
  width: 388px;
  height: 479px;
  border-radius: 6px;
  background-color: #d0f2cc;
}

#x-icon {
  float: right;
  margin-top: 0.4em;
  margin-right: 0.4em;
}

h1 {
  text-align: center;
  margin-top: 2em;
  font-size: 24px;
}

#icon-happy {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

h2 {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 3em;
  margin-left: 3em;
  margin-right: 3em;
}

#icon-sendbox {
  display: flex;
  justify-content: center;
  gap: 4em;
  margin-top: 5em;
}

.blur {
  filter: blur(5px);
  pointer-events: none;
}
</style>
