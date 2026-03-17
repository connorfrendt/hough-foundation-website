<template>
    <div class="about-us-wrapper">
        <div class="main-inner-wrapper">
            <div class="image-wrapper"></div>
            <GivingOptions></GivingOptions>
            <h1 class="about-us-header">
                About Us
            </h1>
            <section class="section-wrapper">
                <h2 class="section-title">Who We Are</h2>
                <div class="mission-vision-wrapper">
                    <div class="wrapper">
                        <h2 class="title">Mission Statement:</h2>
                        <div>The Hough Foundation, with community support, opens doors to opportunity for all students and families of Hough Elementary. Eliminating barriers and helping to create an environment that allows every student to thrive and achieve at their highest level.</div>
                    </div>
                    <div class="wrapper">
                        <h2 class="title">Vision Statement:</h2>
                        <div>The Hough Foundation maintains a financial stability ensuring the continued funding of inclusive extra-curricular programming for Hough Elementary students and emergency support of Hough Elementary families.</div>
                    </div>
                </div>
            </section>
            <section class="section-wrapper">
                <h2 class="section-title">What We Do</h2>
                <div class="inner-paragraph">The Hough Foundation was established in 1992 by Vancouver businessman and former Hough student Paul Christensen to provide support to programs and projects that would enhance the Hough Neighborhood and Hough Elementary School.</div>
                <div class="inner-paragraph">At Hough School a part-time assistant helps the Vancouver School District FCRC Coordinator manage the Family Service Center.</div>
                <div class="inner-paragraph">Mental Health is an area of focus for the Hough Foundation. We connect and pay for many students and families to receive mental health resources in the community as well.</div>
                <div class="inner-paragraph">Our Administrative Assistants coordinate our five after school enrichment programs, Choir, Music Exploration, Piano Lab, Community Garden and Horticulture/Garden Club. Music education helps prepare the brain for math and literacy. Children involved in these programs tend to have improved grades and school attendance. Being a part of Music Exploration or Choir enables students to perform on stage in front of their school community, their families as well as out in the community. These performances bolster self-pride and esteem helping students to feel a strong connection to their school and community at large. Many students that participate in Hough Foundation music programs continue to be involved in the arts as they go forward to middle and high school.</div>
            </section>
            <section class="section-wrapper">
                <div v-for="person in boardOfDirectors" :key="person.id" class="board-wrapper">
                    <h4 class="board-title">{{  person.title }}</h4>
                    <div class="board-name">{{ person.name }}</div>
                    <div class="board-company">{{ person.company }}</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import GivingOptions from '../giving-options/GivingOptions.vue';
import { ref } from 'vue';

const boardOfDirectors = ref([
    {
        id: 10,
        title: 'Chairperson',
        name: 'John Laughlin',
        company: 'J. Laughlin LLC',
    },
    {
        id: 20,
        title: 'Vice Chairperson',
        name: 'Trina Latshaw',
        company: 'Mount Hood Restoration and Construction',
    },
    {
        id: 30,
        title: 'Secretary',
        name: 'Ania Lomas',
        company: '',
    },
    {
        id: 40,
        title: 'Treasurer',
        name: 'David Fuhrer',
        company: 'Realvest Corp CFO',
    },
    {
        id: 50,
        title: 'Board Members',
        name: 'Paul Christensen',
        company: 'Realvest Corporation',
    },
    {
        id: 60,
        title: '',
        name: 'Bill Hibbs',
        company: 'Clark Public Utilities',
    },
    {
        id: 70,
        title: '',
        name: 'Sunny Golden',
        company: 'AC Marriott',
    },
    {
        id: 80,
        title: '',
        name: 'Eric Ferraris',
        company: 'Emergency Medicine Associates',
    },
    {
        id: 90,
        title: '',
        name: 'Ursula Kanthack',
        company: 'Riverview Bank',
    },
    {
        id: 100,
        title: '',
        name: 'Steve Stoll',
        company: 'Principle, Hough Elementary School',
    },
    {
        id: 110,
        title: 'Executive Director',
        name: 'Jill Campbell',
        company: '',
    },
    {
        id: 120,
        title: 'Family Community Resource and Engagement Coordinator',
        name: 'Annette Mccabe',
        company: '',
    },

])
</script>

<style lang="css" src="./about-us.scss"></style>