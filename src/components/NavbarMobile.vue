<template>
    <nav class="navbar">
        <a class="active" href="#"><i class="bi bi-house-fill"></i> </a>
        <a href="#"><i class="bi bi-search"></i> </a>
        <a href="#"><i class="bi bi-plus"></i> </a>
        <a href="#"><i class="bi bi-person-fill"></i> </a>
    </nav>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar {
    overflow: hidden;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 1.5vh;
}

.navbar a {
    display: inline-block;
    color: #2c2c2c;
    padding: 16px 25px;
    text-decoration: none;
    font-size: 17px;
    text-align: center;
}
</style>
