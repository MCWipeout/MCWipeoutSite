<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	export let data;
	const { teams: players, details } = data;

	const teamList = [...new Set(players.map((p: any) => p.team))];
	const teams = teamList.map(team => 
		players.filter((p: any)=> p.team === team).reduce((prev: any, curr: any) => {
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

	const slug = 'women-of-mcwipeout';
	let imageArray: any[] = [];
	for (let i = 0; i < details.galleryCount; i++) {
		imageArray.push(`/background-img/${slug}/${i + 1}.webp`);
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
			<Carousel images={imageArray}/>
		</div>
	</div>
</div>
<div class="hero bg-base-200">
	<div class="hero-content flex flex-wrap w-full items-stretch">
		<h1 class="text-5xl font-bold basis-full text-center">Leaderboards</h1>
		<div class="w-full grid grid-cols-2 gap-2">
			{#each teams as team, i}
				<TeamCard
					teamName={team.team}
					placement={i}
					players={team.player}
					badges={[
							{ name: `Map 1 - ${team.map1}` },
							{ name: `Map 2 - ${team.map2}` },
							{ name: `Sumo - ${team.sumo}` }
						]}
					largeDisplay={team.total}
				/>
			{/each}
		</div>
	</div>
</div>
