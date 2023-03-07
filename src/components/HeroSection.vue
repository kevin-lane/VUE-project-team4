<script></script>

<template>
    <div class="background">

    </div>
</template>

<style scoped>
.background {
    background-image: url("/Background-desktop-opac3.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

@media screen and (max-width: 720px) {

 .background {
    background-image: url("/public/Background-mobile-small-opac.png");
    min-width: 100%;
    min-height: 100%;
 }

}


</style>
