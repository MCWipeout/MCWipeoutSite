<script lang="ts">
	import Icon from '@iconify/svelte';

	import PlayerWrapper from '$lib/components/wrappers/PlayerWrapper.svelte';

	import { getTeamIconPath } from '$lib/unused/helpers/teamHelper';
	import type { EventTeam } from '$lib/unused/types/event.type';
	import type { EventPlayer } from '$lib/unused/types/player.type';

	export let event: string;
	export let teamNames: EventTeam[];
	export let players: EventPlayer[];

	const teamColors: { [key: string]: string } = {
		red: 'bg-red-team/10',
		orange: 'bg-orange-team/10',
		yellow: 'bg-yellow-team/10',
		lime: 'bg-lime-team/10',
		green: 'bg-green-team/10',
		cyan: 'bg-cyan-team/10',
		aqua: 'bg-aqua-team/10',
		blue: 'bg-blue-team/10',
		purple: 'bg-purple-team/10',
		pink: 'bg-pink-team/10'
	};

	let placeholders: number[] = [];
	for (let i = 0; i < 10 - teamNames.length; i++) {
		placeholders.push(i);
	}
</script>

<div class="grid grid-rows-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-5 mx-auto gap-1">
	{#each teamNames as { teamColor, teamName }}
		{@const playerList = players.filter((p) => p.teamColor === teamColor)}
		<div
			class="rounded-lg border border-base-200 p-4 xl:p-8 flex flex-col gap-1 {teamColors[
				teamColor
			]}"
			id="{teamColor}TeamList"
		>
			<div class="flex items-center gap-2">
				<img
					src={getTeamIconPath(event, teamColor)}
					alt="{`${event} ${teamColor}`} icon"
					draggable="false"
					class="w-6 h-6"
				/>

				<p class="text-md font-bold truncate hover:overflow-visible">{teamName}</p>
			</div>
			<div class="divider m-0" />

			{#each playerList as { uuid, name, substitute }}
				<div class="flex flex-row gap-1">
					<PlayerWrapper {uuid} {name} />
					{#if substitute}
						<div class="badge badge-warning gap-2">sub</div>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
	{#each placeholders as pn}
		<div
			class="rounded-lg border border-base-200 p-4 xl:p-8 flex flex-col gap-1"
			id="placeholderTeamList{pn}"
		>
			<div class="flex items-center gap-2">
				<Icon icon="bx:question-mark" class="w-6 h-6" />
				<p class="text-md font-bold truncate hover:overflow-visible">Unknown</p>
			</div>
			<div class="divider m-0" />
			<PlayerWrapper />
			<PlayerWrapper />
			<PlayerWrapper />
			<PlayerWrapper />
		</div>
	{/each}
</div>
