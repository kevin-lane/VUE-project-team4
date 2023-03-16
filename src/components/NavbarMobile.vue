<template>
    <nav class="navbar">
        <a class="active" href="#"><i class="bi bi-house-fill"></i> </a>
        <router-link to=""><i class="bi bi-search"></i> </router-link>
        <router-link to="/add"><i class="bi bi-plus-lg"></i> </router-link>
        <router-link to="/profil"><i class="bi bi-person-fill"></i> </router-link>
    </nav>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');

body {
    margin: 0;
}

.navbar {
    overflow: hidden;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
}

.navbar a {
    display: inline-block;
    color: #2c2c2c;
    padding: 16px 25px;
    text-decoration: none;
    font-size: 17px;
    text-align: center;
}

@media (hover: hover) {
    a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
}
</style>
