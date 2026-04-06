<template>
    <div class="page">
        <!-- HERO -->
        <section class="hero">
            <h1 class="hero-title">Vehicle Donations</h1>
            <p class="hero-sub">Turn your unused vehicle into meaningful community impact.</p>
        </section>

        <!-- INTRO -->
        <section class="card">
            <p>
                Donating your car, truck, or other vehicle helps support vital programs, expand outreach, and create
                lasting positive change. Plus, your donation may qualify for tax benefits.
            </p>
        </section>

        <!-- PROCESS -->
        <section class="card">
            <h2 class="section-title">The Donation Process</h2>

            <div class="steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <p>Complete our Vehicle Donation Form (coming soon)</p>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <p>We arrange pickup and handle paperwork</p>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <p>Your vehicle is sold and proceeds support the foundation</p>
                </div>
            </div>

            <p class="note">
                We accept most vehicles regardless of condition. A valid title is required.
            </p>
        </section>

        <!-- TITLE INFO -->
        <section class="card">
            <h2 class="section-title">Need a Title?</h2>
            <p>
                Titles are required for donation. You can obtain a Quick Title faster than a standard title at the
                locations below.
            </p>
        </section>

        <!-- LOCATIONS -->
        <section class="location-grid">
            <div class="location-card title-card" @click="toggle('battle-ground')">
                <h3 class="title">Battle Ground</h3>
            </div>
            <div class="location-card title-card" @click="toggle('vancouver')">
                <h3 class="title">Vancouver</h3>
            </div>
            <div class="location-card title-card" @click="toggle('ridgefield')">
                <h3 class="title">Ridgefield</h3>
            </div>
        </section>

        <section class="location-grid">
            
            <div class="location-card" v-show="openLocation === 'battle-ground' || isDesktop">
                <div class="single-card">
                    <p class="sub">Battle Ground Auto License</p>
                    <p>301 W Main St #101</p>
                    <p>Battle Ground, WA</p>
                    <span class="meta">Mon–Fri · 10:00–4:00</span>
                    <span class="meta">360.687.5115</span>
                </div>
            </div>

            <div class="location-card" v-show="openLocation === 'vancouver' || isDesktop">
                <div class="single-card">
                    <p class="sub">Auto License Services</p>
                    <p>1301 NE 136th Ave</p>
                    <p>Vancouver, WA 98684</p>
                    <span class="meta">Mon–Fri · 9:00–4:00</span>
                    <span class="meta">360.892.1877</span>
                </div>

                <div class="single-card">
                    <p class="sub alt">Clark County Auditor</p>
                    <p>1408 Franklin St</p>
                    <p>Vancouver, WA 98660</p>
                    <span class="meta">Mon–Fri · 9:00–4:00</span>
                    <span class="meta">360.397.2288</span>
                </div>

                <div class="single-card">
                    <p class="sub alt">Hazel Dell Auto License Agency</p>
                    <p>1503 NE 78th St Unit 10</p>
                    <p>Vancouver, WA 98665</p>
                    <span class="meta">Mon–Fri · 9:00–4:00</span>
                    <span class="meta">360.574.0086</span>
                </div>

                <div class="single-card">
                    <p class="sub alt">Orchards Auto License</p>
                    <p>11820 NE Fourth Plain Blvd Ste D</p>
                    <p>Vancouver, WA 98662</p>
                    <span class="meta">Mon–Fri · 9:00–6:00</span>
                    <span class="meta">Sat · 9:00–4:00</span>
                    <span class="meta">360.254.6226</span>
                </div>

            </div>

            <div class="location-card" v-show="openLocation === 'ridgefield' || isDesktop">
                <div class="single-card">
                    <p class="sub">Ridgefield Junction Auto License</p>
                    <p>7509 S 5th St Suite 101-A</p>
                    <p>Ridgefield, WA </p>
                    <span class="meta">Mon–Fri · 9:00–5:00</span>
                    <span class="meta">Sat · 9:00–Noon</span>
                    <span class="meta">360.887.2345</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const openLocation = ref(null);
const toggle = name => {
    openLocation.value = openLocation.value === name ? null : name
}

const isDesktop = ref(true);

const checkScreen = () => {
    isDesktop.value = window.innerWidth > 830;
}

onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkScreen)
})
</script>

<style scoped lang="scss" src="./vehicle-donations.scss"></style>