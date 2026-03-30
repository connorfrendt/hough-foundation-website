import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/home/Home.vue';
import AboutUs from '@/components/about-us/AboutUs.vue';
import GiftsStockQCD from '@/components/gifts-stock-qcd/GiftsStockQCD.vue';
import VehicleDonations from '@/components/vehicle-donations/VehicleDonations.vue';
import ProgramsServices from '@/components/programs-and-services/ProgramsServices.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: Home },
		{ path: '/about-us', component: AboutUs },
		{ path: '/programs-and-services', component: ProgramsServices },
		{ path: '/donate/gifts-of-stock-and-qcd', component: GiftsStockQCD },
		{ path: '/donate/vehicle-donations', component: VehicleDonations },
		{ path: '/:pathMatch(.*)*', redirect: '/' }
	],
});

export default router;