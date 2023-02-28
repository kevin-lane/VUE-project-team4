<template>
    <nav class="navbar">
        <a class="active" href="#"><i class="fa fa-fw fa-home"></i> </a>
        <a href="#"><i class="fa fa-fw fa-search"></i> </a>
        <a href="#"><i class="fa-solid fa-plus"></i> </a>
        <a href="#"><i class="fa fa-fw fa-user"></i> </a>
    </nav>
</template>

<style scoped>
@import url('path/to/font-awesome/css/font-awesome.min.css');

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
