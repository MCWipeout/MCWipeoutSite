<script lang="ts">
	import SeasonCard from './SeasonCard.svelte';
	import SeasonList from './season-list.json';

	const currentSeason: number | null = null;
</script>

<svelte:head>
	<title>Seasons - MCWipeout</title>
</svelte:head>

<div class="max-w-4xl mx-auto my-8 min-h-screen flex flex-col gap-2 px-4 lg:px-0">
	{#if currentSeason != null}
		<h1 class="text-center text-5xl font-bold mb-4">Current Season</h1>
		<SeasonCard season={SeasonList[0]} />
	{/if}
	<h1 class="text-center text-5xl font-bold my-4">Past Seasons</h1>
	{#each SeasonList.filter((e, i) => i !== currentSeason) as season}
		<SeasonCard {season} />
	{/each}
</div>
