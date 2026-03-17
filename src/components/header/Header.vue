<template>
    <div>

        <!--MOBILE HEADER-->
        <header class="mobile-header">
            <div class="upper-header-wrapper">
                <h1>
                    <a href="about:blank" target="_blank">Hough Foundation</a>
                </h1>
                <div class="menu-opener">
                    <IconHamburgerList @click="menuOpener"></IconHamburgerList>
                </div>
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

        <!--DESKTOP HEADER-->
        <header class="desktop-header">
            <div>
                <h1>
                    <href url="about:blank" target="_blank">Hough Foundation</href>
                </h1>
            </div>
            <div class="menu-wrapper">
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