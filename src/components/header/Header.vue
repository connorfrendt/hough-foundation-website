<template>
    <div>

        <!--MOBILE HEADER-->
        <header class="mobile-header">
            <div class="upper-header-wrapper">
                <div class="banner-menu">
                    <img src="../../assets/logo-horizontal-small.png" />
                    <IconHamburgerList @click="menuOpener"></IconHamburgerList>
                </div>
                <div class="donate-button">Donate Now</div>
            </div>
            <div class="menu-wrapper" :class="{ open: isMenuOpen }">
                <div class="icon-x">
                    <IconXButton @click="closeMenu"></IconXButton>
                </div>
                
                <div class="menu-list">
                    <div
                        v-for="(item, index) in menuItems"
                        :key="index"
                        class="menu-item"
                    >

                        <!-- If it has children -->
                        <div
                            v-if="item.children"
                            class="menu-parent"
                            @click="toggleDropdown(index)"
                        >
                            {{ item.label }} <IconCaretDown></IconCaretDown>
                        </div>
                        
                        <!-- If it's a link -->
                        <RouterLink
                            v-else
                            :to="item.to"
                            class="menu-link routerlink"
                            @click="closeMenu"
                        >
                            {{ item.label }}
                        </RouterLink>

                        <!-- Dropdown -->
                        <div
                            v-if="item.children"
                            class="submenu"
                            :class="{ open: openIndex === index }"
                        >
                            <RouterLink
                                v-for="(child, i) in item.children"
                                :key="i"
                                :to="child.to"
                                class="submenu-item routerlink"
                                @click="closeMenu"
                            >
                                {{ child.label }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
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
import IconXButton from '@/icons/IconXButton.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

function menuOpener() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    console.log(isMenuOpen.value);
    isMenuOpen.value = false;
    console.log(isMenuOpen.value);
}

const menuItems = ref([
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Programs & Services', to: '/' },
    {
        label: 'Donate',
        children: [
            { label: 'Home', to: '/' },
            { label: 'Different Ways to Give', to: '/donate/ways' },
            { label: 'Put in Will', to: '/donate/will' },
            { label: 'Monthly Giving', to: '/donate/monthly' },
            { label: 'DIY Fundraising', to: '/donate/diy' },
            { label: 'Estate Gifts', to: '/donate/estate' },
            { label: 'Gifts of Stock & QCD', to: '/donate/stock' },
            { label: 'Vehicle Donations', to: '/donate/vehicle' },
            { label: 'Honorary Gifts', to: '/donate/honorary' },
            { label: 'Shopping Programs', to: '/donate/shopping' }
        ]
    },
    {
        label: 'Get Involved',
        children: [
            { label: 'Volunteer', to: '/volunteer' },
            { label: 'Events', to: '/events' }
        ]
    }
]);

const openIndex = ref(null);

function toggleDropdown(index) {
    openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped lang="scss" src="./header.scss"></style>