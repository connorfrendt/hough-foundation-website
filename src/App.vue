<template>
    <div>
        <Header></Header>
        <RouterView></RouterView>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from './components/footer/Footer.vue';
import Header from './components/header/Header.vue';
</script>

<style scoped lang="scss">
// html, body {
//     overflow-x: hidden;
// }

// * {
//     outline: 1px solid red;
// }

*,
*::before,
*::after {
    box-sizing: border-box;
}
</style>