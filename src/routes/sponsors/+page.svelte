<script>
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';

	import UserCard from '$lib/components/UserCard.svelte';

	import SponsorList from '$lib/data/credit-list/sponsors.json';
</script>

<div class="min-h-screen bg-base-200">
	<WipeoutHero />
	<div class="hero py-16">
		<div class="hero-content flex-col">
			<h1 class="text-5xl font-bold grow mb-4">Sponsors</h1>
			<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
				{#each SponsorList as sponsor}
					<UserCard user={sponsor} applyMask={false} />
				{/each}
			</div>
		</div>
	</div>
</div>
