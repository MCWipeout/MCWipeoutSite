<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	export let data;
	const { teams, details, slug } = data;
	const finalists = teams.filter((t: any) => t.finalist).sort((a: any, b: any) => a.finalist.finalistTime.localeCompare(b.finalist.finalistTime))
	const participants = teams.filter((t: any) => !t.finalist);

	let imageArray: string[] = [];
	for (let i = 0; i < details.galleryCount; i++) {
		imageArray.push(`/background-img/season-2/${i + 1}.webp`);
	}
</script>

<div class="hero pt-16 bg-base-100">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div>
			<h1 class="text-6xl font-bold text-center">{details.eventName}</h1> 
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
	</div>
</div>
