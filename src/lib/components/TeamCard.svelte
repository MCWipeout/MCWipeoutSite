<script lang="ts">
	import PlayerWrapper from '$lib/components/wrappers/PlayerWrapper.svelte';

	export let teamName: string;
	export let teamColor: string | undefined = undefined;
	export let placement: number | undefined = undefined;
	export let players: (
		| string
		| {
				name: string;
				href: string;
		  }
	)[];
	export let badges:
		| (
				| {
						name: string;
						color?: string;
				  }
				| undefined
		  )[]
		| undefined = undefined;
	export let largeDisplay: string | undefined = undefined;
</script>

<div class="card card-compact card-side bg-base-100 shadow-xl w-full">
	<figure class="text-neutral w-8 p-4" style="background-color: {teamColor ?? '#1DA1F2'}">
		{#if placement}
			{placement + 1}
		{/if}
	</figure>
	<div class="card-body">
		<h2 class="card-title w-full">{teamName}</h2>
		<div class="flex flex-wrap gap-2">
			{#each players as player}
				<div class="rounded-lg p-2 outline outline-1 outline-base-300 bg-base-300">
					{#if typeof player == 'string'}
						<PlayerWrapper name={player} uuid={player} />
					{:else}
						<PlayerWrapper name={player.name} uuid={player.name} href={player.href} />
					{/if}
				</div>
			{/each}
		</div>
		{#if badges?.length}
			<div class="flex flex-wrap gap-2">
				{#each badges as badge}
					{#if badge}
						<div class="badge badge-lg" style="background-color: {badge?.color}">
							{badge?.name}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
		{#if largeDisplay}
			<div class="card-actions justify-end">
				<div class="text-5xl font-bold">{largeDisplay}</div>
			</div>
		{/if}
	</div>
</div>
