<script></script>
<template>
  <section class="post-add">
    <h2>Lägg till annons</h2>
    <span class="line"></span>
    <div class="form-grid">
        <div id="form-cat">
            <h3>Välj kategori:</h3>
            <select>
                <option>Kläder</option>
                <option>Fritid</option>
                <option>Inredning</option>
                <option>Övrigt</option>
                <option>Hälsa</option>
            </select>
        </div>
        <div id="form-price">
            <h3>Pris:</h3>
            <input type="text">
        </div>
        <div id="form-pic">
            <h3>Lägg till bild:</h3>
            <input type="text">
        </div>
        <div id="form-cap">
            <h3>Beskrivning:</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
    </div>


  </section>
</template>

<style scoped>
    .post-add{
        width: 730px;
        background-color: #FFFFFF;

        margin: auto;
        border-radius: 7px;
        box-shadow: 1px 2px 2px  rgb(205, 204, 204);
        margin-top: 15vh;
    }

    h2{
        text-align: center;
    }

    .form-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

</style>
