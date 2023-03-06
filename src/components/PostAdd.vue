<script></script>
<template>
  <section class="post-add">
    <h2>Lägg till annons</h2>
    <span class="line"></span>
    <div class="form-grid">
        <div class="form" id="form-cat">
            <h3>Välj kategori:</h3>
            <select>
                <option>Kläder</option>
                <option>Fritid</option>
                <option>Inredning</option>
                <option>Övrigt</option>
                <option>Hälsa</option>
            </select>
        </div>
        <div class="form" id="form-price">
            <h3>Pris:</h3>
            <input type="text">
        </div>
        <div class="form" id="form-pic">
            <h3>Lägg till bild:</h3>
            <input type="file" accept="image/*">
        </div>
        <div class="form" id="form-cap">
            <h3>Beskrivning:</h3>
            <textarea cols="30" rows="5">Beskriv din produkt...</textarea>
        </div>
    </div>
    <div class="div-btn">
        <input type="button" id="btn" value="Post">
    </div>

  </section>
</template>

<style scoped>
    .post-add{
        width: 730px;
        background-color: #FFFFFF;
        border-radius: 7px;
        box-shadow: 1px 2px 2px  rgb(205, 204, 204);
        margin: auto;
        margin-top: 15vh;
        padding-top: 20px;
    }

    h2{
        text-align: center;
    }

    .form-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* border: solid black 1px; */
        padding: 10px 50px 0px 50px;

    }

    #form-cat  {
        margin-bottom: 15vh;

    }
    #form-cat > select {
        width: 219px;
        height: 39px;
        background-color: #d9d9d9;
        border: none;
        border-radius: 6px;

    }

    #form-price > input {
        width: 219px;
        height: 39px;
        background-color: #d9d9d9;
        border: none;
        border-radius: 6px;

    }

    #form-cap > textarea {
        background-color: #d9d9d9;
        border: none;
        border-radius: 6px;

    }
    .line {
        display: block;
        width: 692px;
        height: 1px;
         background-color: #d9d9d9;
         margin: 35px auto 3px auto;
    }

    #btn {
        margin: 0 auto;
        background-color: #4F7598;
        border: none;
        border-radius: 6px;
        color: white;
    width: 204px;
    height: 54px;

    }
    .div-btn {

        text-align: center;
        padding: 25px;

    }


    @media screen and (max-width: 720px) {

        .post-add{
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 7px;
        box-shadow: 1px 2px 2px  rgb(205, 204, 204);
        margin-top: 10vh;
        padding-top: 5px;
    }

        .form-grid{
        display: flex;
        flex-direction: column;
        align-items: center;


    }

    .form {
        margin-top: 3vh;
    }

    #form-cat  {
        margin-bottom: 0vh;
        margin-right: 55px;

    }

    #form-price {
     margin-right: 55px;

    }

    #form-pic {
        margin-left: 80px;
    }
    .line {
        width: 90%;
         background-color: #d9d9d9;
         margin: 15px auto 3px auto;
    }

    #btn {
        margin: 0 auto;
        background-color: #4F7598;
        border: none;
        border-radius: 6px;
        color: white;
    width: 204px;
    height: 54px;

    }
    .div-btn {

        text-align: center;

    }

}
</style>
