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
	);
	console.log(teams.sort((a, b) => a.total - b.total ));
</script>

<div class="hero py-16 bg-base-100">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div>
			<h1 class="text-5xl font-bold text-center">{details.eventName}</h1> 
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
