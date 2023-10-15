<script>
	import UserCard from '$lib/components/UserCard.svelte';
	import SponsorList from '$lib/data/credit-list/sponsors.json';
</script>

<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Sponsors</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each SponsorList as sponsor}
				<UserCard user={sponsor} applyMask={false} />
			{/each}
		</div>
	</div>
</div>
