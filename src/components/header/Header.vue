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
                            {{ item.label }} <IconCaretDown :class="{ rotate: openIndex === index }"></IconCaretDown>
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
        <div class="mobile-pad"></div>

        <!--DESKTOP HEADER-->
        <header class="desktop-header">
            <div class="banner-donate">
                <img src="../../assets/logo-horizontal-small.png" />
                <div class="donate-button">Donate Now</div>
            </div>
            <div class="menu-wrapper">
                <div
                    class="menu-list-desktop"
                    v-for="(item, index) in menuItems"
                    :key="index"
                >
                    <div
                        class="menu-item-dropdown"
                        v-if="item.children"
                    >
                        {{ item.label }} <IconCaretDown></IconCaretDown>
                    </div>

                    <RouterLink
                        class="menu-item-non-dropdown"
                        v-else
                        :to="item.to"
                        @click="closeMenu"
                    >
                        {{ item.label }}
                    </RouterLink>

                    <div
                        class="submenu-desktop"
                        v-if="item.children"
                        :class="{ open: openIndex === index }"
                    >
                        <RouterLink
                            class="submenu-item-desktop"
                            v-for="(child, i) in item.children"
                            :key="i"
                            :to="child.to"
                            @click="closeMenu"
                        >
                            {{ child.label }}
                        </RouterLink>
                    </div>
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

    if(isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
}

const menuItems = ref([
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Programs & Services', to: '/programs-and-services' },
    {
        label: 'Donate',
        children: [
            { label: 'Different Ways to Give', to: '/donate/ways' },
            { label: 'Put in Will', to: '/donate/will' },
            { label: 'Monthly Giving', to: '/donate/monthly' },
            { label: 'DIY Fundraising', to: '/donate/diy' },
            { label: 'Estate Gifts', to: '/donate/estate' },
            { label: 'Gifts of Stock & QCD', to: '/donate/gifts-of-stock-and-qcd' },
            { label: 'Vehicle Donations', to: '/donate/vehicle-donations' },
            { label: 'Honorary Gifts', to: '/donate/honorary' },
            { label: 'Shopping Programs', to: '/donate/shopping' }
        ]
    },
    {
        label: 'Volunteer', to: '/volunteer'
        // children: [
        //     { label: 'Volunteer', to: '/volunteer' },
        //     { label: 'Events', to: '/events' }
        // ]
    },
    { label: 'Events', to: '/events' },
    // {
    //     label: 'More',
    //     children: [
    //         { label: 'Subscribe to Newsletter', to: '/subscribe-to-newsletter' },
    //         { label: 'Stories and News', to: '/stories-and-news' },
    //     ]
    // },
    { label: 'Contact Us', to: '/contact-us' },
]);

const openIndex = ref(null);

function toggleDropdown(index) {
    openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped lang="scss" src="./header.scss"></style>