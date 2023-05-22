<script lang="ts">
	export let data;
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';

	let imageArray: number[] = [];
	for (let i = 0; i < 17; i++) {
		imageArray.push(i);
	}

	let screenshotHeroHeight: number;

	let latestNews = data.posts[0];
</script>

<svelte:head>
	<title>MC Wipeout</title>
	<meta name="description" content="MC Wipeout - Minecraft parkour, but with a twist!" />
	<link rel="icon" type="image/png" href="/logo.png" />
	<script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<WipeoutHero />
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<iframe
			width="853"
			height="480"
			src="https://www.youtube.com/embed/videoseries?list=PLRaFhPzKh-NTPWnTE_YzrTOSPf1_XOH2i"
			title="YouTube video player"
			frameborder="1"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<div>
			<h1 class="text-5xl font-bold">What is Minecraft Wipeout?</h1>
			<p class="py-6">
				MC Wipeout is a series organized by J48Gaming and bumpyJake that first began on January 1,
				2022. Creators from all over the globe are invited to participate in an obstacle course and
				can potentially win prizes if they make it in the fastest time possible.
			</p>
			<a href="/seasons" class="btn btn-primary">View Past Seasons</a>
		</div>
	</div>
</div>
<div class="hero bg-base-100">
	<div class="hero-content flex flex-wrap w-full items-stretch">
		<h1 class="text-5xl font-bold basis-full text-center">Event News</h1>
		<div class="grid lg:grid-cols-3 gap-4">
			<div class="card max-w-96 bg-base-100 shadow-xl">
				<figure class="bg bg-[#1DA1F2] max-h-32">
					<img src={latestNews.meta.image} alt="Twitter logo" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{latestNews.meta.title}
					</h2>
					<p>
						{latestNews.meta.description}
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="/news/{latestNews.path}">Read More</a>
					</div>
				</div>
			</div>
			<div class="card max-w-96 bg-base-100 shadow-xl image-full">
				<figure class="bg bg-[#1DA1F2]">
					<img src="/background-img/presskit-10.png" alt="Twitter logo" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Event Schedule</h2>
					<div class="overflow-x-auto">
						<table class="table w-full">
							<!-- head -->
							<thead>
								<tr>
									<th>Day</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody class="overflow-y-auto">
								<!-- row 1 -->
								<tr>
									<th>Prelims</th>
									<td>TBA</td>
								</tr>
								<tr>
									<th>Finals</th>
									<td>TBA</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- <div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://www.twitter.com/mc_wipeout">Read More</a>
					</div> -->
				</div>
			</div>
			<div class="card max-w-96 bg-base-100 shadow-xl">
				<figure class="bg bg-[#1DA1F2] max-h-32">
					<img src="/background-img/presskit-9.png" alt="Twitter logo" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Submit Ideas</h2>
					<p>
						Have an idea for an obstacle that you want to see in the course? Feel free to send a
						suggestion!
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://www.twitter.com/mc_wipeout">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="hero bg-base-200">
	<div class="hero-content flex flex-wrap w-full items-stretch">
		<h1 class="text-5xl font-bold basis-full text-center">Follow us on our socials!</h1>
		<div class="grid md:grid-cols-3 gap-4">
			<div class="card card-compact max-w-96 bg-base-100 shadow-xl">
				<figure class="h-20 bg bg-[#1DA1F2] p-4">
					<img src="/social/twitter.png" alt="Twitter logo" class="h-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Twitter</h2>
					<p>
						Join our community to discuss MC Wipeout and help out! We also occasionally post tester
						signups here.
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://www.twitter.com/mc_wipeout">Follow</a>
					</div>
				</div>
			</div>
			<div class="card card-compact max-w-96 bg-base-100 shadow-xl">
				<figure class="h-20 bg bg-[#5865F2] p-4">
					<img src="/social/discord.png" alt="Discord logo" class="h-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Discord</h2>
					<p>
						Join our community to discuss MC Wipeout and help out! We also occasionally post tester
						signups here.
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://discord.gg/b8DGdBjuNR">Join</a>
					</div>
				</div>
			</div>
			<div class="card card-compact max-w-96 bg-base-100 shadow-xl ">
				<figure class="h-20 bg-[#c4302b] p-4">
					<img src="/social/youtube.png" alt="YouTube logo" class="h-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">YouTube</h2>
					<p>Subscribe to get the best highlights and clips of the event!</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Subscribe</button>
					</div>
				</div>
			</div>
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
		<div class="lg:basis-1/3 w-full h-full flex flex-col justify-items-stretch">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Tweets</h1>
			<div class="rounded-xl overflow-hidden">
				<a
					class="twitter-timeline"
					data-theme="dark"
					data-height={screenshotHeroHeight}
					data-aria-polite="assertive"
					data-dnt="true"
					href="https://twitter.com/mc_wipeout?ref_src=twsrc%5Etfw">Tweets by MC Wipeout</a
				>
			</div>
		</div>
	</div>
</div>
