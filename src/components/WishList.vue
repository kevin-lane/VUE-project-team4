<script scoped>
    export default{
        props: [ 'wishes' ],
        data(){
            return {
                listItems: null
            }
        },
        mounted(){
            fetch("products.json")
            .then((response) => response.json())
            .then((result) => {
                this.listItems = result;
            })
        }
}
</script>

<template>
    <section class="wishlist-card">
        <div class="head">
            <h2>Wishlist</h2>
            <p>{{ wishes }}</p>
        </div>
        <div class="grid">
            <div class="div-card" v-for="wish in wishes">
                <img :src="wishes.image" alt="Error">
                <h4>{{ wishes.price }}</h4>
            </div>


        </div>

    </section>
</template>

<style scoped>

.wishlist-card{
    width: 730px;
    background-color: #FFFFFF;
    border-radius: 6px;
    margin: auto;
    box-shadow: 1px 2px 2px  rgb(205, 204, 204);margin-top: 15vh;
    padding-bottom: 10px;

}

h2{
    text-align: center;
    padding-top: 3vh;

}

h3 {
    margin-top: 0;
}


.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 6vh 8vh 2vh 8vh;
}

.div-card {
margin: auto;

}

img{
    height: 229px;
    max-width: 175px;
    border-radius: 6px;
}

@media screen and (max-width: 720px) {

.wishlist-card{
    width: 100vw;
}

.grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin: auto;

}

img{
    height: 229px;
    border-radius: 6px;

}

.div-card {
    margin: auto;
}

}
</style>
