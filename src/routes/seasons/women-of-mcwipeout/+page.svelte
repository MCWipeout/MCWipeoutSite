<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	import PlayerData from './data/teams.json';
	import EventData from './data/details.json';
	import Template from '../Template.svelte';

	const teamList = [...new Set(PlayerData.map((p: any) => p.team))];
	const teams = teamList
		.map((team) =>
			PlayerData.filter((p: any) => p.team === team).reduce(
				(prev: any, curr: any) => {
					return {
						team: prev.team,
						player: prev.player.concat(curr.player),
						map1: prev.map1 + curr.map1,
						map2: prev.map2 + curr.map2,
						sumo: prev.sumo + curr.sumo,
						total: prev.total + curr.total
					};
				},
				{ team: team, map1: 0, map2: 0, sumo: 0, total: 0, player: [] }
			)
		)
		.sort((a, b) => {
			if (a.total === b.total) {
				let winValue = 0;
				winValue += a.map1 > b.map1 ? -1 : a.map1 < b.map1 ? 1 : 0;
				winValue += a.map2 > b.map2 ? -1 : a.map2 < b.map2 ? 1 : 0;
				winValue += a.sumo > b.sumo ? 1 : a.sumo < b.sumo ? -1 : 0;
				return winValue;
			}
			return a.total - b.total;
		});

	const slug = 'women-of-mcwipeout';
	let imageArray: any[] = [];
	for (let i = 0; i < EventData.galleryCount; i++) {
		imageArray.push(`/background-img/${slug}/${i + 1}.webp`);
	}
</script>

<svelte:head>
	<title>Women of MCWipeout - MCWipeout</title>
</svelte:head>

<Template eventName={EventData.eventName} images={imageArray}>
	<div class="w-full grid grid-cols-2 gap-4">
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
</Template>
