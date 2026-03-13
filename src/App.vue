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

<style scoped lang="scss"></style>