<script lang="ts">
	import type { PageData } from './$types';

	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	import Description from './data/description.md';
	import EventData from './data/details.json';
	import Template from '../Template.svelte';

	export let data: PageData;

	const { teamList: PlayerData } = data;

	let randomSample = PlayerData
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
		.slice(0, 10);

	const finalists = randomSample;
	const participants = PlayerData;

	const sessions = Array.from(new Set(participants.map((t) => t.Session))).filter(s => s).sort(); 
	let activeTab = sessions[0];
	$: sessionParticipantList = participants.filter((t) => t.Session == activeTab);

	let imageArray: string[] = [];
	for (let i = 0; i < EventData.galleryCount; i++) {
		imageArray.push(`/background-img/season-2/${i + 1}.webp`);
	}

	function defaultTime() {
		return "XX:XX";
	}
</script>

<Template
	eventName={EventData.eventName}
	images={imageArray}
>
	<div slot="description" class="prose">
		<Description />
	</div>
	<h2 class="text-3xl font-bold basis-full">Finalists</h2>
	<div class="w-full grid lg:grid-cols-2 gap-4">
		{#each finalists as team, i}
			<TeamCard
				teamName={team["Team Name"]}
				placement={i}
				teamColor={team.Colour}
				players={[
					team["P1 Name"]?.trim() || team["P1"],
					team["P2 Name"]?.trim() || team["P2"],
					team["P3 Name"]?.trim() || team["P3"]
				]}
				badges={[
					// team.Session ? { name: team.Session, color: "red" } : undefined,
					{ name: `Map 1: ${ team["Map 1 Time"]?.trim() || defaultTime() }` },
					{ name: `Map 2: ${ team["Map 2 Time"]?.trim() || defaultTime() }` },
					{ name: `Map 3: ${ team["Map 3 Time"]?.trim() || defaultTime() }` }
				]}
				largeDisplay={ team["Map 4 Time"]?.trim() || defaultTime() }
			/>
		{/each}
	</div>
	<div class="divider basis-full" />
	<h2 class="text-3xl font-bold basis-full">Participants</h2>
	<div class="tabs tabs-boxed">
		{#each sessions as session}
			<div 
				class="tab" 
				class:tab-active={activeTab == session}
				style="{activeTab == session ? 'color: hsl(var(--n) / var(--tw-text-opacity))': ''}"
				on:click={() => {activeTab = session}}
				on:keypress={() => {activeTab = session}}
			>
				{ session }
			</div>
		{/each}
	</div>
	<div class="w-full min-h-screen">
		<div class="w-full grid lg:grid-cols-2 gap-4">
			{#each sessionParticipantList as team}
			<TeamCard
				teamName={team["Team Name"]}
				teamColor={team.Colour}
				players={[
					team["P1 Name"].trim() || team["P1"],
					team["P2 Name"].trim() || team["P2"],
					team["P3 Name"].trim() || team["P3"]
				]}
				badges={[
					{ name: `Map 1: ${ team["Map 1 Time"].trim() || defaultTime() }` },
					{ name: `Map 2: ${ team["Map 2 Time"].trim() || defaultTime() }` },
					{ name: `Map 3: ${ team["Map 3 Time"].trim() || defaultTime() }` }
				]}
			/>
			{/each}
		</div>
	</div>
</Template>