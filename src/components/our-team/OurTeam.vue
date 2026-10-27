<template>
    <div class="our-team-wrapper">
        <div class="main-inner-wrapper">
            <!-- Page Header -->
            <h1 class="our-team-header">Our Team</h1>

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
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

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

<style scoped lang="scss" src="./our-team.scss"></style>