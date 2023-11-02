<script lang="ts">
	import type { PageData } from './$types';

	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	import Description from './data/description.md';
	import EventData from './data/details.json';
	import Template from '../Template.svelte';

	export let data: PageData;

	const { processedTeamList } = data;

	const sessions = Array.from(new Set(processedTeamList.map((t) => t.session)))
		.filter((s) => s)
		.sort();
	let activeTab = sessions[0];

	const finalists = processedTeamList.filter((team) => team.finalist);

	$: sessionParticipantList = processedTeamList.filter((t) => t.session == activeTab);

	let imageArray: string[] = [];
	// for (let i = 0; i < EventData.galleryCount; i++) {
	// 	imageArray.push(`/background-img/season-2/${i + 1}.webp`);
	// }

	function defaultTime() {
		return 'XX:XX';
	}
</script>

<svelte:head>
	<title>Season 3 - MCWipeout</title>
</svelte:head>

<Template eventName={EventData.eventName}>
	<div slot="description" class="prose">
		<Description />
	</div>
	{#if finalists.length}
		<h2 class="text-3xl font-bold basis-full">Finalists</h2>
		<div class="w-full grid lg:grid-cols-2 gap-4">
			{#each finalists as team, i}
				<TeamCard
					teamName={team.name}
					teamColor={team.color}
					placement={i}
					players={team.members.map((player) => {
						console.log(player);
						return {
							name: player.username || player.shorthand,
							href: player.twitter,
							mapTimes: player.mapTimes
						};
					})}
					badges={team.mapTimes.slice(0, 3).map((mt) => {
						return mt.mapTime ? { name: `${mt.mapName} - ${mt.mapTime}` } : undefined;
					})}
					finalist={team.finalist}
					largeDisplay={team.finalist ? team.mapTimes[3].mapTime : 'WITHDRAW'}
				/>
			{/each}
		</div>
		<div class="divider basis-full" />
	{/if}
	<h2 class="text-3xl font-bold basis-full">Participants</h2>
	<div class="tabs tabs-boxed">
		{#each sessions as session}
			<div
				class="tab"
				class:tab-active={activeTab == session}
				style={activeTab == session ? 'color: hsl(var(--n) / var(--tw-text-opacity))' : ''}
				on:click={() => {
					activeTab = session;
				}}
				on:keypress={() => {
					activeTab = session;
				}}
			>
				{session}
			</div>
		{/each}
	</div>
	<div class="min-h-screen w-full">
		<div class="grid lg:grid-cols-2 gap-4 w-full">
			{#each sessionParticipantList as team}
				<TeamCard
					teamName={team.name}
					teamColor={team.color}
					players={team.members.map((player) => {
						return {
							name: player.username || player.shorthand,
							href: player.twitter,
							mapTimes: player.mapTimes
						};
					})}
					badges={team.mapTimes.slice(0, 3).map((mt) => {
						return mt.mapTime ? { name: `${mt.mapName} - ${mt.mapTime}` } : undefined;
					})}
				/>
			{/each}
		</div>
	</div>
</Template>
