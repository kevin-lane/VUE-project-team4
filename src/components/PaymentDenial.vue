<script setup>
import IconSad from '../components/IconSad.vue'
import IconX from '../components/IconX.vue'
</script>

<template>
  <div v-if="denialWindow" id="flex-container">
    <div id="content-container">
      <!-- This click event on the 'X' icon will close the denial window when it's clicked -->
      <IconX @click="denialIcon" id="x-icon" />
      <h1>Något gick fel</h1>
      <div id="icon-container">
        <IconSad />
      </div>
      <h2>
        Din betalning gick inte igenom. Var vänligen kontrollera att alla uppgifter stämmer och
        testa igen
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      denialWindow: true
    }
  },

  methods: {
    denialIcon() {
      this.denialWindow = false // Denial window ncard closes and return the user to the homepage
      window.location.reload()
      this.$router.push('/')
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
  background-color: rgba(242, 204, 204, 1);
}

#x-icon {
  float: right;
  margin-top: 0.4em;
  margin-right: 0.4em;
}

h1 {
  text-align: center;
  margin-top: 2em;
}

#icon-container {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  font-size: 24px;
  color: black;
}

h2 {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 3em;
  margin-left: 3em;
  margin-right: 3em;
}
</style>
