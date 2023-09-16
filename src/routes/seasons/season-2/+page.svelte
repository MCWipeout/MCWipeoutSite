<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	import PlayerData from './data/teams.json';
	import EventData from './data/details.json';
	import Template from '../Template.svelte';

	const finalists = PlayerData.filter((t: any) => t.finalist).sort((a: any, b: any) => a.finalist.finalistTime.localeCompare(b.finalist.finalistTime))
	const participants = PlayerData.filter((t: any) => !t.finalist);

	let imageArray: string[] = [];
	for (let i = 0; i < EventData.galleryCount; i++) {
		imageArray.push(`/background-img/season-2/${i + 1}.webp`);
	}
</script>

<Template
	eventName={EventData.eventName}
	images={imageArray}
>
	<h2 class="text-3xl font-bold basis-full">Finalists</h2>
	<div class="w-full grid lg:grid-cols-2 gap-4">
		{#each finalists as team, i}
			<TeamCard
				teamName={team.teamName}
				placement={i}
				players={team.teamMembers}
				badges={[
					{ name: `Played Preliminaries: ${team.preliminaries.dayPlayed}`	},
					team.finalist 
						? { name: `Played Finals: ${team.finalist.finalistDayPlayed}` } 
						: undefined
				]}
				largeDisplay={team.finalist?.finalistTime}
			/>
		{/each}
	</div>
	<div class="divider basis-full" />
	<h2 class="text-3xl font-bold basis-full">Participants</h2>
	<div class="w-full grid lg:grid-cols-2 gap-4">
		{#each participants as team}
			<TeamCard
				teamName={team.teamName}
				players={team.teamMembers}
				badges={[
					{ name: `Played Preliminaries: ${team.preliminaries.dayPlayed}` },
					team.finalist 
						? { name: `Played Finals: ${team.finalist.finalistDayPlayed}` }
						: undefined
				]}
				largeDisplay={team.finalist?.finalistTime}
			/>
		{/each}
	</div>
</Template>