<template>
<div id="flex-container"> 
<div id="profile-container">
<section id="profile-section">
    <img src="../assets/happy-ge5620ff7a_1920.jpg" alt="man">
    <!-- <div id="img"></div> -->
    <h2>Sixten Olsson</h2>
</section>
<!-- <button>Redigera</button> -->
<input type="submit" value="Redigera" id="button" />
<hr>
<div id="card-container">
<section id="product-grid" >
<p>Super cool produkt</p>
<p>Super cool produkt</p>
<p>Bild2</p>
<p>Bild3</p>
<p>Bild4</p>
<p>Bild5</p>
<p>Bild6</p>
</section>
</div>
</div>
</div>   
</template>
<style scoped>

#flex-container{
    display: flex;
    justify-content: center;
}

#profile-container{
    width: 730px;
    height: auto;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    border: black solid 1px;
    margin-bottom: 3em;
}

#profile-section{
    display: flex;
    gap: 8em;
    margin: 3em 0 0.5em 6em;
}

img{
    width: 193px;
    height: 193px;
    border-radius: 96.5px;
    background-color: rgb(237, 237, 237);
    object-fit: cover; 
}

h2{
    margin-top: 3.2em;
    font-weight: 600;
}

#button{
    margin: 1em 0 1em 11em;
    border-radius: 1em;
    background-color: rgb(79, 117, 152, 1);
    color: rgb(248, 248, 248);
    border: rgb(79, 117, 152, 1);
    padding: 0.3em 0.8em 0.3em 0.8em;
    font-weight: 400;
    
}

hr{
    width: 692px;
    margin: 1em 0 0 1.2em;
}

#card-container{
    display: flex;
    justify-content: center;
    margin: 6em 0 2em 0;
}

#product-grid{
    display: grid;
    grid-template-columns: repeat( 3, 1fr);
    grid-template-rows: auto;
    gap: 2em; 
}

p{
    width: 200px;
    height: 275.38px;
    border: solid black 1.5px;
    border-radius: 6px;
    background-color: blueviolet;
}





</style>