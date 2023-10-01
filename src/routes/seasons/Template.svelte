<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
    
    export let eventName: string;
    export let images: string[];
</script>

<div class="hero pt-16 bg-base-100">
	<div class="hero-content flex-col">
		<div>
			<h1 class="text-6xl font-bold text-center">{eventName}</h1> 
		</div>
	</div>
</div>
<div class="hero pt-16 bg-base-200">
	<div class="hero-content flex-col w-full items-start">
		<slot name="description" />
	</div>
</div>
<div class="hero py-16 bg-base-100">
	<div class="hero-content flex flex-col items-stretch lg:flex-row w-full">
		<div class="flex flex-col flex-wrap">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Screenshots</h1>
			<Carousel {images}/>
		</div>
	</div>
</div>
<div class="hero bg-base-200">
	<div class="hero-content flex flex-wrap w-full items-stretch">
        <h1 class="text-5xl font-bold basis-full text-center">Leaderboards</h1>
		<slot />
	</div>
</div>
