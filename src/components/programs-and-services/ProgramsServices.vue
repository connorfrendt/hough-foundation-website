<template>
  <div class="page">
    <!-- HERO -->
    <section class="hero">
        <h1 class="hero-title">Programs & Services</h1>
        <p class="hero-sub">Supporting families, empowering students, strengthening community.</p>
    </section>

    <GivingOptions></GivingOptions>

    <!-- FAMILY SERVICES -->
    <section class="card highlight-teal">
        <h2 class="section-title">Family Service Center</h2>
        <p>
            The Family Services Center supports children and families facing challenges that can become barriers to a successful education.
        </p>
        <p>
            Through partnerships with the Vancouver School District and FCRC network, we respond quickly to evolving needs—providing clothing, school supplies, and crisis support when needed.
        </p>
    </section>

    <section class="card highlight-coral">
        <h2 class="section-title">Programs</h2>
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

    <!-- AFTER SCHOOL TABS -->
    <section class="card highlight-green">
        <h2 class="section-title">After School Enrichment (2025–2026)</h2>

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

      <!-- CONTENT -->
      <div class="tab-content">
        <!-- PIANO -->
            <div v-if="activeTab === 'Piano Exploration'">
                <p>
                    Students explore piano fundamentals through hands-on learning and creative activities. No experience required.
                </p>
                <span class="meta">Mondays 12:30 - 2 · Early Release</span>

                <div class="video-wrapper">
                    <iframe
                    src="https://player.vimeo.com/video/1165796024?title=0&byline=0&portrait=0"
                    frameborder="0"
                    allowfullscreen
                    ></iframe>
                </div>
            </div>

        <!-- MUSIC -->
        <div v-if="activeTab === 'Music Exploration'">
          <p>
            Explore instruments like percussion, ukulele, and more. Includes performance opportunities for all skill levels.
          </p>
          <span class="meta">Tuesdays & Wednesdays · 2:30–4pm</span>

          <div class="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1165795552?title=0&byline=0&portrait=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- CHOIR -->
        <div v-if="activeTab === 'Hough Choir'">
          <p>
            Join the Hough Choir and build vocal skills while performing with peers in a fun, collaborative environment.
          </p>
          <span class="meta">Thursdays · 2:30 - 4 · 3rd–5th Grade</span>

          <div class="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1165792993?title=0&byline=0&portrait=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- GARDEN -->
        <div v-if="activeTab === 'Garden / Horticulture'">
          <p>
            Students learn about gardening, sustainability, and nature through hands-on outdoor activities.
          </p>
          <span class="meta">Thursdays or Fridays · 1st–5th Grade</span>

          <div class="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1165793516?title=0&byline=0&portrait=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import IconMail from '@/icons/IconMail.vue';
import IconPhone from '@/icons/IconPhone.vue';
import { ref } from 'vue'
import GivingOptions from '../giving-options/GivingOptions.vue';

const tabs = [
  'Piano Exploration',
  'Music Exploration',
  'Hough Choir',
  'Garden / Horticulture'
]

const activeTab = ref(tabs[0])
</script>

<style scoped lang="scss" src="./programs-services.scss"></style>