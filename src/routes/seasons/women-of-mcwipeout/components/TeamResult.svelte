<script>
    import PlayerWrapper from '$lib/components/wrappers/PlayerWrapper.svelte';

    export let team;
    export let placement;
</script>

<div class="card card-compact card-side bg-base-100 shadow-xl">
    <figure class="bg-[#1DA1F2] text-neutral w-8 p-4">
        {placement+1}
    </figure>
    <div class="card-body">
        <h2 class="card-title">{team.team}</h2>
        <div class="flex flex-wrap gap-2">
            {#each team.player as player}
            <div class="rounded-lg p-2 outline outline-1 outline-base-300 bg-base-300">
                <PlayerWrapper name={player} uuid={player} />
            </div>
            {/each}
        </div>
        <div class="flex flex-wrap gap-2">
            <div class="badge badge-lg">Map 1 - {team.map1}</div>
            <div class="badge badge-lg">Map 2 - {team.map2}</div>
            <div class="badge badge-lg">Sumo - {team.sumo}</div>
        </div>
        <div class="card-actions justify-end">
            <div class="text-5xl font-bold">{team.total}</div>
        </div>
    </div>
</div>