<script>
export default {
  data() {
    return {
      textinput: '',
      searchs: []
    }
  },

  computed: {
    Itemlist() {
      if (this.OnClick === true) {
        return this.searchs.filter((item) =>
          item.title.toLowerCase().includes(this.textinput.toLowerCase())
        )
      }

      return this.searchs
    }
  },

  methods: {
    OnClick() {
      fetch('../public/products.json')
        .then((response) => response.json())
        .then((result) => {
          this.searchs = result
          console.log(result)
        })
    }
  }
}
</script>
<template>
  <div id="div-container">
    <div id="form-container">
      <!--Rubrik för formulär-->
      <h2>Welcome to InstaBuy</h2>
      <!--Formulär börjar här-->
      <form action="">
        <label for="search-box">Search</label>
        <!--Input börjar här-->
        <input v-model="textinput" type="text" name="searchbox" id="searchbox" placeholder="Sök" />
        <!-- <input v-model="textinput" type="text" name="searchbox" id="searchbox" placeholder="sök" /> -->
        <label for="location">Choose location</label>
        <!--Rullgardin börjar här-->
        <select name="city" id="cities">
          <!-- Stockholm -->
          <optgroup label="Stockholm">
            <option value="zinkensdam">Zinkensdam</option>
            <option value="liljeholmen">Liljeholmen</option>
            <option value="hornstull">Hornstull</option>
          </optgroup>
          <!-- Göteborg -->
          <optgroup label="Göteborg">
            <option value="gammlaullevi">Gamla Ullevi</option>
            <option value="nyaullevi">Nya Ullevi</option>
          </optgroup>
          <!-- Umeå -->
          <optgroup label="Umeå">
            <option value="gubböle">Gubböle</option>
            <option value="mickelträsk">Mickelträsk</option>
          </optgroup>
          <!-- Malmö -->
          <optgroup label="Malmö">
            <option value="Skumparp">Skumparp</option>
            <option value="Fårabäck">Fårabäck</option>
          </optgroup>
        </select>
        <!--Knapp börjar här-->
        <input @click.prevent="$store.commit('Click',this.textinput)" type="submit" value="Find ad" id="send" />
      </form>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1100px) {/*Mobilversion*/
  h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 27.6px;
  color: rgb(79, 117, 152, 1);
  text-align: center;
  margin: 1em 0 1em 0;
}
h3 {
  text-align: center;
  background-color: aqua;
  padding: 2em;
}

label {
  display: block;
  margin: 1em 0 0.3em 0;
  font-weight: 400px;
  font-size: 20px;
  line-height: 23px;
  color: rgba(155, 155, 155, 1);
}

/* Knapp börjar här */
#send {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400px;
  font-size: 20px;
  display: block;
  margin: 2.6em 0 2em 1.6em;
  background-color: rgb(79, 117, 152, 1);
  color: rgb(248, 248, 248);
  border: rgb(79, 117, 152, 1);
  width: 214px;
  height: 54px;
  border-radius: 4px;
  line-height: 23px;
}

#form-container {
  background-color: rgb(207, 219, 219);
  padding: 1em;
  width: 95vw;
  height: 443px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4em;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 2em 0 2em;
}

/* Container för fomuläret */
#div-container {
   /* display: flex;
  justify-content: right;
  margin-top: 4em;  */
  /* contain: content; */
  position: fixed;
  z-index: 2;
  /* top: 330px; */
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    padding-bottom: 90px;
}

/* Sök rutan */
#searchbox {
  border: 1px;
  height: 47px;
  font-size: 20px;
  padding-left: 8px;
}

/* Innehåll i rullgradin */

#cities {
  height: 47px;
  padding: 0.1em;
  border: 1px;
  font-weight: 400px;
  font-size: 20px;
  color: rgba(155, 155, 155, 1);
}

#searchbox::placeholder {
  font-size: 20px;
  padding-left: 5px;
  /* color: rgba(155, 155, 155, 1); */
}
#cities {
  padding-left: 10px;
  color: black;
}
}

@media screen and (min-width: 1100px) {/*Destopversion*/
  h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 27.6px;
  color: rgb(79, 117, 152, 1);
  text-align: center;
  margin: 1em 0 1em 0;
}
h3 {
  text-align: center;
  background-color: aqua;
  padding: 2em;
}

label {
  display: block;
  margin: 1em 0 0.3em 0;
  font-weight: 400px;
  font-size: 20px;
  line-height: 23px;
  color: rgba(155, 155, 155, 1);
}

/* Knapp börjar här */
#send {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400px;
  font-size: 20px;
  display: block;
  margin: 2.6em 0 2em 1.6em;
  background-color: rgb(79, 117, 152, 1);
  color: rgb(248, 248, 248);
  border: rgb(79, 117, 152, 1);
  width: 214px;
  height: 54px;
  border-radius: 4px;
  line-height: 23px;
}

#form-container {
  background-color: rgb(207, 219, 219);
  padding: 1em;
  width: 365px;
  height: 443px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4em;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 2em 0 2em;
}

/* Container för fomuläret */
#div-container {
  /* display: flex;
  justify-content: right;
  margin-top: 4em; */
  /* contain: content; */
  position: fixed;
  top: 5vh;
  z-index: 9;
  right: 10px;

}

/* Sök rutan */
#searchbox {
  border: 1px;
  height: 47px;
  font-size: 20px;
  padding-left: 8px;
}

/* Innehåll i rullgradin */

#cities {
  height: 47px;
  padding: 0.1em;
  border: 1px;
  font-weight: 400px;
  font-size: 20px;
  color: rgba(155, 155, 155, 1);
}

#searchbox::placeholder {
  font-size: 20px;
  padding-left: 5px;
  /* color: rgba(155, 155, 155, 1); */
}
#cities {
  padding-left: 10px;
  color: black;
}
}

</style>
