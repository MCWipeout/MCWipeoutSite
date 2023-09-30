<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	// import PlayerData from './data/teams.json';
	import PlayerData from './data/tableConvert.com_fb4wel.json';
	import EventData from './data/details.json';
	import Template from '../Template.svelte';

	let randomSample = PlayerData
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
		.slice(0, 10)

	const finalists = randomSample;
	const participants = PlayerData;

	const sessions = [
		"Session 1",
		"Session 2",
		"Session 3"
	]
	let activeTab = "Session 1";
	$: sessionParticipantList = participants.filter((t) => t.Session == activeTab);

;	let imageArray: string[] = [];
	for (let i = 0; i < EventData.galleryCount; i++) {
		imageArray.push(`/background-img/season-2/${i + 1}.webp`);
	}
</script>

<Template
	eventName={EventData.eventName}
	images={imageArray}
>
	<div slot="description" class="text-center">An upgraded MCWipeout, with an all new format and courses.</div>
	<h2 class="text-3xl font-bold basis-full">Finalists</h2>
	<div class="w-full grid lg:grid-cols-2 gap-4">
		{#each finalists as team, i}
			<TeamCard
				teamName={team["Team Name"]}
				placement={i}
				teamColor={team.Colour}
				players={[
					team.P1,
					team.P2,
					team.P3
				]}
				badges={[
					team.Session ? { name: team.Session } : undefined
				]}
			/>
		{/each}
	</div>
	<div class="divider basis-full" />
	<h2 class="text-3xl font-bold basis-full">Participants</h2>
	<div class="tabs tabs-boxed">
		{#each sessions as s}
			<div 
				class="tab" 
				class:tab-active={activeTab == s}
				style="{activeTab == s ? 'color: hsl(var(--n) / var(--tw-text-opacity))': ''}"
				on:click={() => {activeTab = s}}
				on:keypress={() => {activeTab = s}}
			>
				{ s }
			</div>
		{/each}
	</div>
	<div class="w-full grid lg:grid-cols-2 gap-4">
		{#each sessionParticipantList as team}
		<TeamCard
			teamName={team["Team Name"]}
			teamColor={team.Colour}
			players={[
				team.P1,
				team.P2,
				team.P3
			]}
			badges={[
				{ name: team.Session }
			]}
		/>
		{/each}
	</div>
</Template>