<script></script>

<template>
    <section class="wishlist-card">
        <div class="head">
            <h2>Wishlist</h2>
        </div>
        <div class="grid">
            <div class="div-card">
                <img src="" alt="">
                <h3>$18.00</h3>
            </div>
            <div class="div-card">
                <img src="" alt="">
                <h3>$18.00</h3>
            </div>
            <div class="div-card">
                <img src="" alt="">
                <h3>$18.00</h3>
            </div>
            <div class="div-card">
                <img src="" alt="">
                <h3>$18.00</h3>
            </div>
            <div class="div-card">
                <img src="" alt="">
                <h3>$18.00</h3>
            </div>
        </div>

    </section>
</template>

<style scoped>

.wishlist-card{
    width: 730px;
}
.head{
    font-size: 24px;
    font-weight: 600;
}

.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
