<script>
	import TeamResult from './components/TeamResult.svelte';

	export let data;
	const { teams, details, slug } = data;
	const finalists = teams.filter((t) => t.finalist).sort((a, b) => a.finalist.finalistTime.localeCompare(b.finalist.finalistTime))
	const participants = teams.filter((t) => !t.finalist);

	let imageArray = [];
	for (let i = 0; i < details.galleryCount; i++) {
		imageArray.push(i);
	}
</script>

<div class="hero py-16 bg-base-100">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div>
			<h1 class="text-5xl font-bold text-center">{details.eventName}</h1> 
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-100">
	<div class="hero-content flex flex-col items-stretch lg:flex-row w-full">
		<div class="flex flex-col flex-wrap">
			<h1 class="text-5xl font-bold grow mb-4 text-center">Screenshots</h1>
			<div class="carousel rounded-box">
				{#each imageArray as img}
					<div
						id="slide{img + 1}"
						class="carousel-item relative w-full"
					>
						<img
							src="/background-img/{slug}/{img + 1}.webp"
							class="w-full"
							alt="Screenshot {img + 1}"
							loading="lazy"
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
	</div>
</div>
<div class="hero bg-base-200">
	<div class="hero-content flex flex-wrap w-full items-stretch">
		<h1 class="text-5xl font-bold basis-full text-center">Leaderboards</h1>
		<h2 class="text-3xl font-bold basis-full">Finalists</h2>
		<div class="w-full flex flex-col gap-2">
			{#each finalists as team, i}
				<TeamResult {team} placement={i} />
			{/each}
		</div>
		<div class="divider basis-full" />
		<h2 class="text-3xl font-bold basis-full">Participants</h2>
		<div class="w-full flex flex-col gap-2">
			{#each participants as team}
				<TeamResult {team} />
			{/each}
		</div>
	</div>
</div>
