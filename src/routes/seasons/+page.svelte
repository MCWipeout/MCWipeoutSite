<script>	
	import SeasonCard from './SeasonCard.svelte';
	import SeasonList from './season-list.json';
</script>

<div class="max-w-4xl mx-auto my-8 min-h-screen flex flex-col gap-2 px-4 lg:px-0">
	<h1 class="text-center text-5xl font-bold mb-4">Current Season</h1>
	<SeasonCard season={SeasonList[0]} />
	<h1 class="text-center text-5xl font-bold my-4">Past Seasons</h1>
	{#each SeasonList.slice(1) as season}
		<SeasonCard {season} />
	{/each}
</div>
