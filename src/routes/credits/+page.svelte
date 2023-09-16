<script>
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';

	import UserCard from './UserCard.svelte';

	import StaffList from './credit-list/staff.json';
	import SponsorList from './credit-list/sponsors.json';
	import SpecialThanksList from './credit-list/special-thanks.json';
</script>

<WipeoutHero />
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Sponsors</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each SponsorList as sponsor}
				<UserCard user={sponsor} circleMask={false}/>
			{/each}
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-100">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Staff</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each StaffList as staff}
				<UserCard user={staff} />
			{/each}
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Special Thanks</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each SpecialThanksList as special}
				<UserCard user={special} />
			{/each}
		</div>
	</div>
</div>
