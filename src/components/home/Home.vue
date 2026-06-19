<template>
    <div>
        <div class="image-quote">
            <div class="image-wrapper"></div>
            <div class="quote">From basic needs to enrichment programs, we help students and families overcome barries
                and build a stronger, healthier future together.</div>
        </div>

        <GivingOptions></GivingOptions>
        <GallerySlider></GallerySlider>
    </div>
</template>

<script setup>
import GivingOptions from '../giving-options/GivingOptions.vue';
import GallerySlider from '../gallery-slider/GallerySlider.vue';
</script>

<style scoped lang="scss" src="./home.scss"></style>