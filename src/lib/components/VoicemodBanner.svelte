<script lang="ts">
	export let data;
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	let imageArray: string[] = [];
	for (let i = 0; i < 9; i++) {
		imageArray.push(`/background-img/main/${i + 1}.webp`);
	}

	let screenshotHeroHeight: number;

	let latestNews = data.posts[0];

	const eventDates = [
		new Date('11/03/2023 07:00:00 AM EST'),
		new Date('11/03/2023 02:00:00 PM EST'),
		new Date('11/04/2023 05:00:00 PM EST')
	];
</script>

<div class="hero" style="background-image: url('/background-img/main/1.webp');">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content flex flex-col lg:flex-row py-8">
		<h1 class="text-4xl font-bold">Join the MCWipeout x Voicemod clip competition!</h1>
		<a class="btn btn-primary" href="/voicemod#voicemodHero">More info</a>
	</div>
</div>
