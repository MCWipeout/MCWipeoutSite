<script>
    import PlayerWrapper from '$lib/components/wrappers/PlayerWrapper.svelte';

    export let team;
    export let placement;
</script>

<div class="card card-compact card-side bg-base-100 shadow-xl">
    <figure class="bg-[#1DA1F2] text-neutral w-8 p-4">
        {#if team.finalist}
            {placement+1}
        {/if}
    </figure>
    <div class="card-body">
        <h2 class="card-title">{team.teamName}</h2>
        <div class="flex flex-wrap gap-2">
            {#each team.teamMembers as player}
            <div class="rounded-lg p-2 outline outline-1 outline-base-300 bg-base-300">
                <PlayerWrapper name={player} uuid={player} />
            </div>
            {/each}
        </div>
        <div class="flex flex-wrap gap-2">
            <div class="badge badge-lg">Played Preliminaries: {team.preliminaries.dayPlayed}</div>
            {#if team.finalist}
                <div class="badge badge-lg bg-secondary">Played Finals: {team.finalist.finalistDayPlayed}</div>
            {/if}
        </div>
        {#if team.finalist}
        <div class="card-actions justify-end">
            <div class="text-5xl font-bold">{team.finalist.finalistTime}</div>
        </div>
        {/if}
    </div>
    <!-- {#if team.finalist}
    <div class="p-4 flex items-end">
        <div class="text-5xl font-bold">{team.finalist.finalistTime}</div>
    </div>
    {/if} -->
</div>