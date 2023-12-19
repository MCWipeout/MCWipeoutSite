<script lang="ts">
	import type { PageData } from './$types';

	import Carousel from '$lib/components/Carousel.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

	import Description from './data/description.md';
	import EventData from './data/details.json';
	import Template from '../Template.svelte';
	import LeaderboardTable from './components/LeaderboardTable.svelte';

	export let data: PageData;

	const { processedTeamList } = data;

	let activeDisplayTab: 'Participants' | 'Leaderboards' = 'Participants';

	const sessions = Array.from(new Set(processedTeamList.map((t) => t.session)))
		.filter((s) => s)
		.sort();
	let activeSessionTab = sessions[0];

	const finalists = processedTeamList.filter((team) => team.finalist);

	let activeGroupSortSetting: 'Team' | 'Individual' = 'Team';
	const maps = ['Map 1', 'Map 2', 'Map 3', 'Map 4'];
	let activeMapSortSetting: string = maps[0];

	$: sessionParticipantList = processedTeamList.filter((t) => t.session == activeSessionTab);
	$: individualTimes = processedTeamList.map((ptl) => ptl.members).flat();

	let imageArray: string[] = [];
	// for (let i = 0; i < EventData.galleryCount; i++) {
	// 	imageArray.push(`/background-img/season-2/${i + 1}.webp`);
	// }

	function defaultTime() {
		return 'XX:XX';
	}

	$: sortedFinalists = finalists.sort((a, b) => {
		if (a.mapTimes[3].mapTime === '--:--.--' && b.mapTimes[3].mapTime === '--:--.--') return 0;
		if (a.mapTimes[3].mapTime === '--:--.--') return 1;
		if (b.mapTimes[3].mapTime === '--:--.--') return -1;

		return a.mapTimes[3].mapTime.localeCompare(b.mapTimes[3].mapTime);
	});
</script>

<svelte:head>
	<title>Season 3 - MCWipeout</title>
</svelte:head>

<Template eventName={EventData.eventName}>
	<div class="tabs tabs-boxed">
		<div
			class="tab tab-lg"
			class:tab-active={activeDisplayTab == 'Participants'}
			style={activeDisplayTab == 'Participants'
				? 'color: hsl(var(--n) / var(--tw-text-opacity))'
				: ''}
			on:click={() => {
				activeDisplayTab = 'Participants';
			}}
			on:keypress={() => {
				activeDisplayTab = 'Participants';
			}}
		>
			{'Participants'}
		</div>
		<div
			class="tab tab-lg"
			class:tab-active={activeDisplayTab == 'Leaderboards'}
			style={activeDisplayTab == 'Leaderboards'
				? 'color: hsl(var(--n) / var(--tw-text-opacity))'
				: ''}
			on:click={() => {
				activeDisplayTab = 'Leaderboards';
			}}
			on:keypress={() => {
				activeDisplayTab = 'Leaderboards';
			}}
		>
			{'Leaderboards'}
		</div>
	</div>
	<div slot="description" class="prose">
		<Description />
	</div>
	{#if activeDisplayTab == 'Participants'}
		{#if finalists.length}
			<h2 class="text-3xl font-bold basis-full">Finalists</h2>
			<div class="w-full grid lg:grid-cols-2 gap-4">
				{#each sortedFinalists as team, i}
					<TeamCard
						teamName={team.name}
						teamColor={team.color}
						placement={i}
						players={team.members.map((player) => {
							return {
								name: player.username || player.shorthand,
								href: player.twitter,
								mapTimes: player.mapTimes
							};
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
					class:tab-active={activeSessionTab == session}
					style={activeSessionTab == session ? 'color: hsl(var(--n) / var(--tw-text-opacity))' : ''}
					on:click={() => {
						activeSessionTab = session;
					}}
					on:keypress={() => {
						activeSessionTab = session;
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
	{/if}
	{#if activeDisplayTab == 'Leaderboards'}
		<h2 class="text-3xl font-bold basis-full">Leaderboards</h2>
		<div class="flex flex-col">
			<div class="tabs tabs-boxed">
				<div
					class="tab flex-grow"
					class:tab-active={activeGroupSortSetting == 'Team'}
					style={activeGroupSortSetting == 'Team'
						? 'color: hsl(var(--n) / var(--tw-text-opacity))'
						: ''}
					on:click={() => {
						activeGroupSortSetting = 'Team';
					}}
					on:keypress={() => {
						activeGroupSortSetting = 'Team';
					}}
				>
					Team
				</div>
				<div
					class="tab flex-grow"
					class:tab-active={activeGroupSortSetting == 'Individual'}
					style={activeGroupSortSetting == 'Individual'
						? 'color: hsl(var(--n) / var(--tw-text-opacity))'
						: ''}
					on:click={() => {
						activeGroupSortSetting = 'Individual';
					}}
					on:keypress={() => {
						activeGroupSortSetting = 'Individual';
					}}
				>
					Individual
				</div>
			</div>
			<div class="tabs tabs-boxed">
				{#each maps as map}
					<div
						class="tab"
						class:tab-active={activeMapSortSetting == map}
						style={activeMapSortSetting == map
							? 'color: hsl(var(--n) / var(--tw-text-opacity))'
							: ''}
						on:click={() => {
							activeMapSortSetting = map;
						}}
						on:keypress={() => {
							activeMapSortSetting = map;
						}}
					>
						{map}
					</div>
				{/each}
			</div>
		</div>
		<div class="min-h-screen w-full">
			<LeaderboardTable
				mapName={activeMapSortSetting}
				rankingList={activeGroupSortSetting == 'Team' ? processedTeamList : individualTimes}
			/>
		</div>
	{/if}
</Template>
