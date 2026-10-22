<template>
  <div class="page">
    <!-- HERO -->
    <section class="hero">
        <h1 class="hero-title">Programs & Services</h1>
        <p class="hero-sub">Supporting families, empowering students, strengthening community.</p>
    </section>

    <GivingOptions></GivingOptions>

    

    <!-- AFTER SCHOOL TABS -->
    <section class="card highlight-green">
        <h2 class="section-title">After School Enrichment Programs (2025-2026)</h2>

        <!-- TABS -->
        <div class="tabs">
            <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab', { active: activeTab === tab }]"
                @click="activeTab = tab"
            >
                {{ tab }}
            </button>
        </div>

        <!-- MOBILE DROPDOWN -->
        <div ref="dropdownRef" class="tabs-dropdown">
            <button
                class="tab dropdown-toggle-tab"
                :aria-expanded="isDropdownOpen"
                @click="isDropdownOpen = !isDropdownOpen"
            >
                <span>{{ activeTab }}</span>
                <!-- TODO: swap for a Bootstrap icon -->
                <span class="dropdown-arrow" :class="{ open: isDropdownOpen }">&#9660;</span>
            </button>

            <div v-if="isDropdownOpen" class="dropdown-list">
                <button
                    v-for="tab in tabs"
                    :key="tab"
                    :class="['tab', { active: activeTab === tab }]"
                    @click="selectTab(tab)"
                >
                    {{ tab }}
                </button>
            </div>
        </div>

        <!-- CONTENT -->
        <div class="tab-content">
            <!-- Schedule: one block per session (Outdoor Explorers has two, shown side-by-side) -->
            <div class="sessions">
                <div
                    v-for="(session, i) in activeProgram.sessions"
                    :key="i"
                    class="session"
                >
                    <p><strong>Day(s):</strong> {{ session.days }}</p>
                    <p><strong>Times:</strong> {{ session.times }}</p>
                    <p><strong>For Who:</strong> {{ session.forWho }}</p>
                </div>
            </div>

            <p class="description">{{ activeProgram.description }}</p>

            <div v-if="activeProgram.video" class="video-wrapper">
                <iframe
                    :src="activeProgram.video"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </section>

    <!-- FAMILY SERVICES -->
    <section class="card highlight-teal">
        <h2 class="section-title">Family Service Center</h2>
        <p>
            The Family Services Center supports children and families facing challenges that can become barriers to a successful education.
        </p>
        <p>
            Through partnerships with the Vancouver School District and FCRC network, we respond quickly to evolving needs—providing clothing, school supplies, and crisis support when needed.
        </p>
        
        <p>Private Counseling for Students and Parents</p>
        <p>Sometimes life is hard and gets in the way of living a nurturing life that allows our kids to learn and grow.  If you or your child is in need of private counseling, we may be able to help.  Please contact our FCRC:</p>
        <p class="contact-name">Annette Mccabe</p>
        <div class="contact-info">
            <IconMail></IconMail>
            <p><a href="mailto:annette.mccabe@vansd.org">annette.mccabe@vansd.org</a></p>
        </div>
        <div class="contact-info">
            <IconPhone></IconPhone>
            <p><a href="tel:+13603132107">360.313.2107</a></p>
        </div>
    </section>
  </div>
</template>

<script setup>
import IconMail from '@/icons/IconMail.vue';
import IconPhone from '@/icons/IconPhone.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue'
import GivingOptions from '../giving-options/GivingOptions.vue';

// Each program becomes a tab. Add a second entry to `sessions` to show
// another schedule block side-by-side. Leave `video` empty to hide it.
const programs = [
    {
        name: 'Piano Exploration',
        sessions: [
            { days: 'Monday', times: '12:30 - 2:30', forWho: '3rd - 5th grade students' },
        ],
        description: 'Students explore piano fundamentals through hands-on learning and creative activities. No experience required.',
        video: 'https://player.vimeo.com/video/1165796024?title=0&byline=0&portrait=0',
    },
    {
        name: 'Hough Choir',
        sessions: [
            { days: 'Tuesday', times: '2:30 - 4', forWho: '3rd - 5th grade students' },
        ],
        description: 'Join the Hough Choir and build vocal skills while performing with peers in a fun, collaborative environment.',
        video: 'https://player.vimeo.com/video/1165792993?title=0&byline=0&portrait=0',
    },
    {
        name: 'Music Exploration',
        sessions: [
            { days: 'Wednesday & Thursday', times: '2:30 - 4', forWho: '3rd - 5th grade students' },
        ],
        description: 'Explore instruments like percussion, ukulele, and more. Includes performance opportunities for all skill levels.',
        video: 'https://player.vimeo.com/video/1165795552?title=0&byline=0&portrait=0',
    },
    {
        // Formerly Garden / Horticulture — description and video carried over
        name: 'Seedling Supper',
        sessions: [
            { days: 'Wednesday', times: '2:30 - 4', forWho: '3rd - 5th grade students' },
        ],
        description: 'Students learn about gardening, sustainability, and nature through hands-on outdoor activities.',
        video: 'https://player.vimeo.com/video/1165793516?title=0&byline=0&portrait=0',
    },
    {
        name: 'Outdoor Explorers',
        sessions: [
            { days: 'Thursday', times: '2:30 - 4', forWho: '1st - 3rd grade students' },
            { days: 'Friday', times: '2:30 - 4', forWho: '4th & 5th grade students' },
        ],
        description: 'TODO: Outdoor Explorers description',
        video: '',
    },
    {
        name: 'STEAM Exploration',
        sessions: [
            { days: 'Friday', times: '2:30 - 4', forWho: '1st - 5th grade students' },
        ],
        description: 'TODO: STEAM Exploration description',
        video: '',
    },
]

const tabs = programs.map(program => program.name)

const activeTab = ref(tabs[0])
const activeProgram = computed(() => programs.find(program => program.name === activeTab.value))

// Mobile dropdown
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

function selectTab(tab) {
    activeTab.value = tab
    isDropdownOpen.value = false
}

// Close the dropdown when tapping anywhere outside it
function onClickOutside(e) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        isDropdownOpen.value = false
    }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<style scoped lang="scss" src="./programs-services.scss"></style>