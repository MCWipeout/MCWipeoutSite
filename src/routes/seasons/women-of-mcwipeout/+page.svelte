<script>
	import TeamResult from './components/TeamResult.svelte';

	export let data;
	const { teams: players, details } = data;

	const teamList = [...new Set(players.map((p) => p.team))];
	const teams = teamList.map(team => 
		players.filter(p => p.team === team).reduce((prev, curr) => {
			return {
				team: prev.team,
				player: prev.player.concat(curr.player),
				map1: prev.map1 + curr.map1,
				map2: prev.map2 + curr.map2,
				sumo: prev.sumo + curr.sumo,
				total: prev.total + curr.total
			}
		}, { team: team, map1: 0, map2: 0, sumo: 0, total: 0, player: [] })
	).sort((a, b) => {
		if (a.total === b.total) {
			let winValue = 0;
			winValue += 
				a.map1 > b.map1 ? -1 :
				a.map1 < b.map1 ? 1 : 0;
			winValue += 
				a.map2 > b.map2 ? -1 :
				a.map2 < b.map2 ? 1 : 0;
			winValue += 
				a.sumo > b.sumo ? 1 :
				a.sumo < b.sumo ? -1 : 0;
			return winValue;
		}
		return a.total - b.total;
	});
	console.log(teams);

	const slug = 'women-of-mcwipeout';
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
		<div class="w-full flex flex-col gap-2">
			{#each teams as team, i}
				<TeamResult {team} placement={i} />
			{/each}
		</div>
	</div>
</div>
