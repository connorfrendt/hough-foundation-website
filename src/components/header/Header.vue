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
            <div class="banner-donate">
                <img src="../../assets/logo-horizontal-small.png" />
                <div class="donate-button">Donate Now</div>
            </div>
            <div class="menu-wrapper">
                <div class="nav-header-item"><RouterLink class="info-bar-button" @click="closeMenu" to="/">Home</RouterLink></div>
                <div class="nav-header-item"><RouterLink class="info-bar-button" @click="closeMenu" to="/about-us">About Us</RouterLink></div>
                <div class="nav-header-item">Programs & Services</div>
                <div class="nav-header-item nav-item">
                    Donate
                    <IconCaretDown></IconCaretDown>
                    <ul class="dropdown-menu-list">
                        <li class="nav-header-item">Different Ways to Donate</li>
                        <li class="nav-header-item">Put in Will TODO</li>
                        <li class="nav-header-item">Monthly Giving</li>
                        <li class="nav-header-item">DIY Fundraising</li>
                        <li class="nav-header-item">Estate Gifts</li>
                        <li class="nav-header-item">Gifts of Stock and QCD</li>
                        <li class="nav-header-item">Vehicle Donations</li>
                        <li class="nav-header-item">Honorary Gifts</li>
                        <li class="nav-header-item">Shopping Programs</li>
                    </ul>
                </div>
                <div class="nav-header-item nav-item">
                    Get Involved
                    <IconCaretDown></IconCaretDown>
                    <ul class="dropdown-menu-list">
                        <li class="nav-header-item">Volunteer</li>
                        <li class="nav-header-item">Events</li>
                    </ul>
                </div>
                <div class="nav-header-item nav-item">
                    More<IconCaretDown></IconCaretDown>
                    <ul class="dropdown-menu-list">
                        <li class="nav-header-item">Donate</li>
                        <li class="nav-header-item">Stories & News</li>
                        <li class="nav-header-item">Subscribe to Newsletter</li>
                        <li class="nav-header-item">Contact Us</li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
import IconHamburgerList from '@/icons/IconHamburgerList.vue';
import IconCaretDown from '@/icons/IconCaretDown.vue';
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