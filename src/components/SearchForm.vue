<template>
  <div id="div-container">
      <div id="form-container">
        <!--Rubrik för formulär-->
        <h2>Welcome to InstaBuy</h2>
        <!--Formulär börjar här-->
        <form action="">
          <label for="search-box">Search</label>
          <!--Input börjar här-->
          <input
            type="text"
            name="search-box"
            id="search-box"
            placeholder="sök"
          />
          <label for="location">Choose location</label>
          <!--Rullgardin börjar här-->
          <select name="city" id="cities">
            <optgroup label="Stockholm">
              <option value="zinkensdam">Zinkensdam</option>
              <option value="liljeholmen">Liljeholmen</option>
              <option value="hornstull">Hornstull</option>
            </optgroup>
          </select>
          <!--Knapp börjar här-->
          <input type="submit" value="Find ad" id="send" />
        </form>
      </div>
    </div>
</template>

<style scoped>

h2{
    font-size: 24px;
    font-weight: 700;
    line-height: 27.6px;
    color: rgb(79, 117, 152, 1);
    text-align: center;
    margin: 1em 0 1em 0;
}

label{
    display: block;
    margin: 1em 0 0.3em 0;
    font-weight: 400px;
    font-size: 20px;
    line-height: 23px;
    color: rgba(155, 155, 155, 1);
}

/* Knapp börjar här */
#send{
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400px;
    font-size: 20px;
    display: block;
    margin:2.6em 0 2em 2em;
    background-color: rgb(79, 117, 152, 1);
    color: rgb(248, 248, 248);
    border: rgb(79, 117, 152, 1);
    width: 214px;
    height: 54px;
    border-radius: 4px;
    line-height: 23px;
}

#form-container{
    background-color: rgb(207, 219, 219);
    padding: 1em;
    width: 365px;
    height:443px;
    border-radius:10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4em;
}

form{
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin: 0 2em 0 2em;
}

/* Container för fomuläret */ 
#div-container{
    display: flex;
    justify-content: center;
    margin-top: 4em;
}

/* Sök rutan */
#search-box{
    border: 1px;
    height: 47px;
    font-size: 20px;
    padding-left: 8px;

}

/* Innehåll i rullgradin */ 

#cities{
    height: 47px;
    padding: 0.1em;
    border: 1px;
    font-weight: 400px;
    font-size: 20px;
    color: rgba(155, 155, 155, 1);
}

#search-box::placeholder{
    font-size: 20px;
    padding-left: 10px;
    /* color: rgba(155, 155, 155, 1); */

}
#cities{
    padding-left: 10px;
    color: black;
}
</style>























<!-- <template>
  <div id="div-container">
    <div id="form-container">
      <h2>Welcome to InstaBuy</h2>
      <form action="">
        <label for="search-box">Search</label>
        <input type="text" name="search" id="search-box" placeholder="sök" />
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
</style> -->
