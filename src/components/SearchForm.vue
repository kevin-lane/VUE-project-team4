<template>
  <div id="div-container">
    <div id="form-container">
      <h2>Welcome to InstaBuy</h2>
      <form action="">
        <label for="search-label">Search</label>
        <input type="text" name="search-box" id="search-box" placeholder="sök" />
        <label for="location">Choose location</label>
        <select name="city" id="cities">
          <option value="stockholm">Stockholm</option>
          <option value="liljeholmen">Liljeholmen</option>
          <option value="hornstull">Hornstull</option>
        </select>
        <input type="submit" value="Find ad" id="send" />
      </form>
    </div>
  </div>
</template>

<style scoped>
h2{
    font-size: 24px;
    font-weight: 700;
    color: rgb(79, 117, 152, 1);
    text-align: center;
}

label{
    display: block;
    margin-top: 1em;
    font-weight: lighter;
}

#send{
    display: block;
    margin-bottom: 2em;
    margin-top: 2em;
    background-color: rgb(79, 117, 152, 1);
    color: aliceblue;
    background-color: rgb(79, 117, 152, 1);
    border: rgb(79, 117, 152, 1);
    width: 12em;
    height: 2.4em;
    border-radius: 4px;
}

#form-container{
    background-color: rgb(207, 219, 219);
    padding: 1em;
    width: 250px;
    height:auto;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

form{
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin-left: 19%;
}

#div-container{
    display: flex;
    justify-content: center;
    margin-top: 4em;
}

#search-box{
    width: 12em;
}
#cities{
    width: 12.5em;
    padding: 0.1em;
}
</style>
