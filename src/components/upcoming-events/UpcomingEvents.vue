<template>
    <div style="text-align: center;">EVENTS</div>
    <section class="upcoming-events">
        <!-- Featured events: static images that link to the event page -->
        <a
            v-for="(event, index) in featuredEvents"
            :key="index"
            :href="event.href"
            class="event-card"
        >
            <img :src="event.src" :alt="event.alt" />
        </a>

        <!-- Third card: slider for 2+ events, a static image for exactly 1, "Coming Soon!" for none -->
        <div class="event-card">
            <GallerySlider
                v-if="sliderEvents.length > 1"
                :images="sliderEvents"
            ></GallerySlider>

            <a
                v-else-if="sliderEvents.length === 1"
                :href="sliderEvents[0].href"
            >
                <img :src="sliderEvents[0].src" :alt="sliderEvents[0].alt" />
            </a>

            <div v-else class="coming-soon">Coming Soon!</div>
        </div>
    </section>
</template>

<script setup>
import GallerySlider from '../gallery-slider/GallerySlider.vue';
import sipNStroll from '@/assets/SipnStroll-2026.jpg';

// TODO: replace href '#' with real event links
const featuredEvents = [
    { src: sipNStroll, alt: 'Sip & Stroll 2026', href: '#' },
    { src: sipNStroll, alt: 'Sip & Stroll 2026', href: '#' },
];

// Add events here to fill the third card, e.g.
// { src: someImage, alt: 'Hoedown Auction', href: '#' },
const sliderEvents = [];
</script>

<style scoped lang="scss" src="./upcoming-events.scss"></style>