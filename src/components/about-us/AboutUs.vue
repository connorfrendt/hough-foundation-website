<template>
    <div class="about-us-wrapper">
        <div class="main-inner-wrapper">
            <!-- Hero Image -->
            <div class="image-wrapper"></div>

            <!-- Giving Options Component -->
            <GivingOptions />

            <!-- Page Header -->
            <h1 class="about-us-header">About Us</h1>

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

            <!-- WHO WE ARE TAB -->
            <div v-if="activeTab === 'Who We Are'" class="tab-content">
                <!-- Board of Directors Section -->
                <section class="section-wrapper">
                    <h2 class="section-title">Board of Directors</h2>
                    <div class="board-grid">
                        <div
                            v-for="person in boardOfDirectors"
                            :key="person.id"
                            class="board-card"
                        >
                        <img class="board-image" :src="getImage(person.image)" />
                        <div class="board-name">{{ person.name }}</div>
                            <h4 class="board-title">{{ person.title }}</h4>
                            <div class="board-company">{{ person.company }}</div>
                        </div>
                    </div>
                </section>

                <!-- Who We Are Section -->
                <section class="section-wrapper">
                    <h2 class="section-title">Who We Are</h2>
                    <div class="mission-vision-wrapper">
                        <div class="card">
                            <h3 class="card-title">Mission Statement:</h3>
                            <p>
                                The Hough Foundation, with community support, opens
                                doors to opportunity for all students and families
                                of Hough Elementary. Eliminating barriers and
                                helping to create an environment that allows every
                                student to thrive and achieve at their highest
                                level.
                            </p>
                        </div>
                        <div class="card">
                            <h3 class="card-title">Vision Statement:</h3>
                            <p>
                                The Hough Foundation maintains a financial stability
                                ensuring the continued funding of inclusive
                                extra-curricular programming for Hough Elementary
                                students and emergency support of Hough Elementary
                                families.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- What We Do Section -->
                <section class="section-wrapper">
                    <h2 class="section-title">What We Do</h2>
                    <p class="inner-paragraph">
                        The Hough Foundation was established in 1992 by Vancouver
                        businessman and former Hough student Paul Christensen to
                        provide support to programs and projects that would enhance
                        the Hough Neighborhood and Hough Elementary School.
                    </p>
                    <p class="inner-paragraph">
                        At Hough School a part-time assistant helps the Vancouver
                        School District FCRC Coordinator manage the Family Service
                        Center.
                    </p>
                    <p class="inner-paragraph">
                        Mental Health is an area of focus for the Hough Foundation.
                        We connect and pay for students and families to receive
                        mental health resources in the community as well.
                    </p>
                    <p class="inner-paragraph">
                        Our Administrative Assistants coordinate our five after
                        school enrichment programs, Choir, Music Exploration, Piano
                        Lab, Community Garden and Horticulture/Garden Club. Music
                        education helps prepare the brain for math and literacy.
                        Children involved in these programs tend to have improved
                        grades and school attendance. Being a part of Music
                        Exploration or Choir enables students to perform on stage in
                        front of their school community, their families as well as
                        out in the community. These performances bolster self-pride
                        and esteem helping students to feel a strong connection to
                        their school and community at large. Many students that
                        participate in Hough Foundation music programs continue to
                        be involved in the arts as they go forward to middle and
                        high school.
                    </p>
                </section>
                <!-- VIDEOS HERE -->
            </div>

            <!-- COMMUNITY SUPPORT TAB -->
            <div v-if="activeTab === 'Community Support'" class="tab-content">
                <p>Hello World</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import GivingOptions from "../giving-options/GivingOptions.vue";
import { ref } from "vue";

const tabs = ["Who We Are", "Community Support"];
const activeTab = ref(tabs[0]);

const getImage = (file) => new URL(`../../assets/board-of-directors/${file}`, import.meta.url).href;

const boardOfDirectors = ref([
    {
        id: 10,
        title: "Chairperson",
        name: "John Laughlin",
        company: "J. Laughlin LLC",
        image: ""
    },
    {
        id: 20,
        title: "Vice Chairperson",
        name: "Trina Latshaw",
        company: "Mount Hood Restoration and Construction",
        image: ""
    },
    {
        id: 30,
        title: "Secretary",
        name: "Ania Lomas",
        company: "",
        image: "Headshot-Ania.jpg"
    },
    {
        id: 40,
        title: "Treasurer",
        name: "David Fuhrer",
        company: "Realvest Corp CFO",
        image: "head-shot-David-Fuhrer.jpg"
    },
    {
        id: 60,
        title: "",
        name: "Bill Hibbs",
        company: "Clark Public Utilities",
        image: "head-shot-Bill-Hibbs.png"
    },
    {
        id: 70,
        title: "",
        name: "Sunny Golden",
        company: "AC Marriott",
        image: ""
    },
    {
        id: 80,
        title: "",
        name: "Eric Ferraris",
        company: "Emergency Medicine Associates",
        image: ""
    },
    {
        id: 90,
        title: "",
        name: "Ursula Kanthack",
        company: "Riverview Bank",
        image: "Head-Shot-Ursula-Kanthack-2.jpg"
    },
    {
        id: 100,
        title: "",
        name: "Steve Stoll",
        company: "Principle, Hough Elementary School",
        image: ""
    },
    {
        id: 110,
        title: "Executive Director",
        name: "Jill Campbell",
        company: "The Hough Foundation",
        image: "headshot-jill.jpg"
    },
    {
        id: 120,
        title: "Family Community Resource and Engagement Coordinator",
        name: "Annette Mccabe",
        company: "",
        image: ""
    },
]);
</script>

<style scoped lang="css" src="./about-us.scss"></style>