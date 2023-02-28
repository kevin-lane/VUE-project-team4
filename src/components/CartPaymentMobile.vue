<template>
     <div id="flex-flex-container">
      <div id="flex-container">
        <div id="wrapp">
          <h3>checkout</h3>
          <div id="section">
            <div id="img">Bild</div>
          <div 
          id="produckt-info-container">
            <h4>Nike sneaker</h4>
            <p id="size" > Size 40</p>
            <p id="price" >$80.00</p>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
#flex-container{
display: flex;
justify-content: center;
}

#wrapp{
background-color:rgba(245, 245, 245, 1);
width: 390px;
height: 581px;
left: 0px;
top: 145px;
}

#produckt-info-container{
display: block;
}

h3{
    text-align: center;
    font-weight: 700;
    margin-top: 2em;
}

h4{
    font-weight: 700;
}

#img{
    width: 40px;
    height: 40px;
    background-color: red;
    margin-left: 3em;
}

#section{
    display: flex;
    gap: 9em;
    margin-top: 3em;
}

</style>