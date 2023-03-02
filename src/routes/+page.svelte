<script lang="ts">
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';

	let imageArray: number[] = [];
	for (let i = 0; i < 17; i++) {
		imageArray.push(i);
	}

	let screenshotHeroHeight: number;
</script>

<svelte:head>
	<title>MC Wipeout</title>
	<meta name="description" content="MC Wipeout - Minecraft parkour, but with a twist!" />
	<link rel="icon" type="image/png" href="/logo.png" />
</svelte:head>

<WipeoutHero />
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<iframe
			src="https://www.youtube.com/embed/aNb5SMDRois?list=PLRaFhPzKh-NQ_QMBs7kOBblTq2d7-6QiB"
			title="I got CREATORS to play MINECRAFT WIPEOUT"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<div>
			<h1 class="text-5xl font-bold">What is Minecraft Wipeout?</h1>
			<p class="py-6">
				Minecraft Wipeout is a YouTube series organized by J48Gaming and Zylops, first uploaded on
				Jan 1 2022, creators from all over the globe are invited to participate and potentially win
				prizes IF they make it in the fastest time possible.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-100">
	<div class="hero-content flex flex-col items-stretch lg:flex-row w-full">
		<div class="flex flex-col lg:basis-2/3 flex-wrap">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Screenshots</h1>
			<div class="carousel rounded-box">
				{#each imageArray as img}
					<div
						id="slide{img + 1}"
						class="carousel-item relative w-full"
						bind:clientHeight={screenshotHeroHeight}
					>
						<img
							src="/background-img/presskit-{img + 1}.png"
							class="w-full"
							alt="Screenshot {img + 1}"
						/>
						<div
							class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
						>
							<a
								href="#slide{((((img - 1) % imageArray.length) + imageArray.length) %
									imageArray.length) +
									1}"
								class="btn btn-circle">❮</a
							>
							<a
								href="#slide{((((img + 1) % imageArray.length) + imageArray.length) %
									imageArray.length) +
									1}"
								class="btn btn-circle">❯</a
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="lg:basis-1/3 w-full h-full flex flex-col">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Tweets</h1>
			<div class="overflow-y-scroll rounded-xl">
				<a
					class="twitter-timeline"
					data-height={screenshotHeroHeight}
					data-theme="dark"
					href="https://twitter.com/mc_wipeout?ref_src=twsrc%5Etfw">Tweets by MC Wipeout</a
				> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div>
		</div>
	</div>
</div>
