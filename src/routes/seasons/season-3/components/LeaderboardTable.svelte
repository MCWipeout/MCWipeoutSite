<script lang="ts">
	import type { Player, Team } from '../event.types';
	import PlayerWrapper from '$lib/components/wrappers/PlayerWrapper.svelte';

	export let mapName: string;
	export let rankingList: Team[] | Player[];
	$: sortedRankingList = rankingList.sort((a, b) => {
		const rowAMapPerformance = a.mapTimes.find((mt) => mt.mapName === mapName);
		const rowBMapPerformance = b.mapTimes.find((mt) => mt.mapName === mapName);

		if (rowAMapPerformance?.mapTime === '--:--.--' && rowBMapPerformance?.mapTime === '--:--.--')
			return 0;
		if (rowAMapPerformance?.mapTime === '--:--.--') return 1;
		if (rowBMapPerformance?.mapTime === '--:--.--') return -1;

		return rowAMapPerformance?.mapTime.localeCompare(rowBMapPerformance?.mapTime);
	});
</script>

<div class="overflow-x-auto w-full">
	<table class="table table-compact w-full">
		<!-- head -->
		<thead>
			<tr>
				<th />
				<th>Name</th>
				{#if 'name' in sortedRankingList[0]}
					<th>Session</th>
				{/if}
				<th>Time</th>
			</tr>
		</thead>
		<tbody>
			{#each sortedRankingList as row, i}
				{@const rowMapPerformance = row.mapTimes.find((mt) => mt.mapName === mapName)}
				<tr>
					<th>{rowMapPerformance?.mapTime !== '--:--.--' ? i + 1 : ''}</th>
					{#if 'name' in row}
						<td>
							<div class="flex items-center gap-2">
								<div>
									<svg height="20" width="20">
										<circle cx="10" cy="10" r="5" fill={row.color} />
									</svg>
								</div>
								<div>
									<p>{row.name}</p>
									<p class="opacity-50">
										{#each row.members as tm, i}
											<a
												target="_blank"
												rel="noopener noreferrer"
												class="link link-hover"
												href={tm.twitter}>{tm.username}</a
											>{i === row.members.length - 1 ? '' : ', '}
										{/each}
									</p>
								</div>
							</div>
						</td>
						<td>{row.session}</td>
						<td>{rowMapPerformance?.mapTime}</td>
					{:else}
						<td><PlayerWrapper href={row.twitter} uuid={row.uuid} name={row.username} /></td>
						<td>{rowMapPerformance?.mapTime}</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
