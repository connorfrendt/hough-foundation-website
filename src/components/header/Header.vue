<template>
    <div>
        <header>
            <div class="menu-opener" @click="menuOpener">
                <h1>Hough Foundation</h1>
                <IconHamburgerList></IconHamburgerList>
            </div>
            <div class="menu-wrapper" v-show="isMenuOpen">
                <div><RouterLink class="info-bar-button" @click="closeMenu" to="/">Home</RouterLink></div>
                <div><RouterLink class="info-bar-button" @click="closeMenu" to="/about-us">About Us</RouterLink></div>
                <div>Programs</div>
                <div>Services</div>
                <div>Get Involved</div>
                <div>Events</div>
                <div>Stories & News</div>
                <div>Donate</div>
                <div>Smart Giving</div>
                <div>Contact Us</div>
                <div>Get Engaged</div>
                <div>Volunteer</div>
                <div>Subscribe to Newsletter</div>
            </div>
        </header>
    </div>
</template>

<script setup>
import IconHamburgerList from '@/icons/IconHamburgerList.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

function menuOpener() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}
</script>

<style scoped lang="scss" src="./header.scss"></style>