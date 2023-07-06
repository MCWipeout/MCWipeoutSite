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
</script>

<svelte:head>
	<title>MCWipeout</title>
	<meta name="description" content="MCWipeout - Minecraft parkour, but with a twist!" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<!-- <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
</svelte:head>

<WipeoutHero />
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<iframe
			src="https://www.youtube.com/embed/videoseries?list=PLRaFhPzKh-NTPWnTE_YzrTOSPf1_XOH2i"
			title="YouTube video player"
			frameborder="1"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
			class="lg:w-full w-auto h-64"
		/>
		<div>
			<h1 class="text-5xl font-bold">What is MCWipeout?</h1>
			<p class="py-6">
				MCWipeout is a series organized by J48 and bumpyJake that first began on January 1,
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
					<img src={latestNews.meta.image} alt="Latest news banner" loading="lazy"/>
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
					<img src="/background-img/women-of-mcwipeout/banner.webp" alt="Event Schedule Banner" loading="lazy" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Event Schedule</h2>
					<div class="overflow-x-auto">
						<table class="table w-full">
							<!-- head -->
							<thead>
								<tr>
									<th class="text-base-content">Day</th>
									<th class="text-base-content">Time</th>
								</tr>
							</thead>
							<tbody class="overflow-y-auto">
								<!-- row 1 -->
								<tr>
									<th class="text-base-content">July 12</th>
									<td class="text-base-content">2 PM EST</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="card max-w-96 bg-base-100 shadow-xl">
				<figure class="bg bg-[#1DA1F2] max-h-32">
					<img src="/background-img/submit-ideas.webp" alt="Submit Ideas Banner" loading="lazy" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Submit Ideas</h2>
					<p>
						Have an idea for an obstacle that you want to see in the course? Feel free to send a
						suggestion!
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://forms.gle/7VcZKRHex2WePT2G6">Read More</a>
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
					<img src="/social/twitter.webp" alt="Twitter logo" class="h-full" loading="lazy" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Twitter</h2>
					<p>
						Join our community to discuss MCWipeout and help out! We also occasionally post tester
						signups here.
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://www.twitter.com/mc_wipeout">Follow</a>
					</div>
				</div>
			</div>
			<div class="card card-compact max-w-96 bg-base-100 shadow-xl">
				<figure class="h-20 bg bg-[#5865F2] p-4">
					<img src="/social/discord.webp" alt="Discord logo" class="h-full" loading="lazy" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Discord</h2>
					<p>
						Join our community to discuss MCWipeout and help out! We also occasionally post tester
						signups here.
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://discord.gg/EhuZUzk7Mc">Join</a>
					</div>
				</div>
			</div>
			<div class="card card-compact max-w-96 bg-base-100 shadow-xl ">
				<figure class="h-20 bg-[#c4302b] p-4">
					<img src="/social/youtube.webp" alt="YouTube logo" class="h-full" loading="lazy" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">YouTube</h2>
					<p>Subscribe to get the best highlights and clips of the event!</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="https://www.youtube.com/@mcwipeout">Subscribe</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-100">
	<div class="hero-content flex flex-col items-stretch lg:flex-row w-full">
		<div class="flex flex-col flex-wrap">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Screenshots</h1>
			<Carousel images={imageArray} bind:carouselHeight={screenshotHeroHeight}/>
		</div>
		<!-- <div class="lg:basis-1/3 w-full flex flex-col justify-items-stretch">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Tweets</h1>
			<div class="rounded-xl overflow-hidden max-h-[500px]">
				<a
					class="twitter-timeline"
					data-theme="dark"
					data-height={screenshotHeroHeight}
					data-aria-polite="assertive"
					data-dnt="true"
					href="https://twitter.com/mc_wipeout?ref_src=twsrc%5Etfw">Tweets by MCWipeout</a
				>
			</div>
		</div> -->
	</div>
</div>
