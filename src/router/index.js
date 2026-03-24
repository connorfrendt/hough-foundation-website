import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/home/Home.vue';
import AboutUs from '@/components/about-us/AboutUs.vue';
import GiftsStockQCD from '@/components/gifts-stock-qcd/GiftsStockQCD.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', component: Home },
		{ path: '/about-us', component: AboutUs },
		{ path: '/donate/gifts-of-stock-and-qcd', component: GiftsStockQCD },
		{ path: '/:pathMatch(.*)*', redirect: '/' }
	],
});

export default router;