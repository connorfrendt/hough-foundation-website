<template>
    <div>
        <div class="image-quote">
            <div class="image-wrapper"></div>
            <div class="quote">From basic needs to enrichment programs, we help students and families overcome barries
                and build a stronger, healthier future together.</div>
        </div>

        <GivingOptions></GivingOptions>
        
        <div class="volunteer">
            <div class="volunteer-content-wrapper">
                <div class="volunteer-content">
                    <div class="volunteer-text">
                        <h2 class="volunteer-title">Volunteer With Us</h2>
                        <p class="volunteer-description">
                            If you would like to make a meaningful impact by supporting school programs, summer camps, and community events like
                            Hoedown Auction and Sip & Stroll, please contact us:
                        </p>
                        <p class="name">Jill Campbell</p>
                    </div>
    
                    <div class="volunteer-actions">
                        <a href="tel:+13609927060" class="btn primary">
                            <IconPhone></IconPhone>
                            <span>360.992.7060</span>
                        </a>
                        <a href="mailto:jcampbell@houghfoundation.org" class="btn primary">
                            <IconMail></IconMail>
                            <span>jcampbell@houghfoundation.org</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import IconMail from '@/icons/IconMail.vue';
import GivingOptions from '../giving-options/GivingOptions.vue';
import IconPhone from '@/icons/IconPhone.vue';
</script>

<style scoped lang="scss" src="./home.scss"></style>