<script scoped>
    export default{
        data(){
            return {
                itemsPrice: this.$store.state.productPrice,
                itemPicture: this.$store.state.productPicture
            }

        }

}
</script>

<template>
    <section class="wishlist-card">
        <div class="head">
            <h2>Wishlist</h2>
        </div>

        <div id="warn" v-if="$store.state.wishClass == false">
                <h3>There are no liked adds here at the moment...</h3>
            </div>
        <div class="grid">

            <div class="div-card" v-for="item, index in itemsPrice">
                <img :src="itemPicture[index]" :alt="index + 1">
                <div class="card-container">
                    <h4>{{ item }}</h4>
                    <button @click="$store.commit('removeWish', index)" class="remove-btn">Remove</button>
                </div>
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
    object-fit:cover;
}

#warn {
    text-align: center;
    margin-top: 40px;
}
.remove-btn {
    border-style: none;
    background-color: white;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 0;
    font-weight: 600;


}
.card-container{
    display: flex;
    justify-content: space-around;
    margin-top: 1vh;
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
    object-fit: cover;

}

.div-card {
    margin: auto;
}

}
</style>
