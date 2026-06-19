<template>
    <div>
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

        <section class="volunteer-card">
            <div>
                Different Ways to Volunteer:
            </div>
            <div>Events</div>
            <div>After School Programs</div>
            <div>Garden</div>
            <div>Lunch Buddies</div>
        </section>

    </div>
</template>

<script setup>
import IconMail from '@/icons/IconMail.vue';
import IconPhone from '@/icons/IconPhone.vue';
</script>

<style scoped lang="scss" src="./volunteer.scss"></style>