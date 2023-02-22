<script lang="ts">
	import WipeoutHero from "$lib/components/WipeoutHero.svelte";
	let imageArray: number[] = [];
	for (let i = 0; i < 17; i++) {
		imageArray.push(i);
	}
</script>

<svelte:head>
	<title>MC Wipeout</title>
	<meta
		name="description"
		content="MC Wipeout - Minecraft parkour, but with a twist!"
	/>
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
	<div class="hero-content flex-col w-full">
		<h1 class="text-5xl font-bold grow mb-4">Screenshots</h1>
		<div class="carousel rounded-box w-full">
			{#each imageArray as img}
				<div id="slide{img + 1}" class="carousel-item relative w-full">
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
				<!-- 
				<div id="slide1" class="carousel-item relative w-full">
					<img src="/background-img/presskit-1.png" class="w-full" />
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide4" class="btn btn-circle">❮</a>
						<a href="#slide2" class="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<img src="/background-img/presskit-2.png" class="w-full" />
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide1" class="btn btn-circle">❮</a>
						<a href="#slide3" class="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<img src="/background-img/presskit-3.png" class="w-full" />
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide2" class="btn btn-circle">❮</a>
						<a href="#slide4" class="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide4" class="carousel-item relative w-full">
					<img src="/background-img/presskit-4.png" class="w-full" />
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
					>
						<a href="#slide3" class="btn btn-circle">❮</a>
						<a href="#slide1" class="btn btn-circle">❯</a>
					</div>
				</div> -->
			{/each}
		</div>
	</div>
</div>
