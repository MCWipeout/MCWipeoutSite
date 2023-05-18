<script>
	import TeamResult from './components/TeamResult.svelte';

	export let data;
	const { teams, details } = data;
	const finalists = teams.filter((t) => t.finalist)
	const participants = teams.filter((t) => !t.finalist)
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
