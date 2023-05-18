<script>
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';

	import StaffList from './credit-list/staff.json';
	import SponsorList from './credit-list/sponsors.json';
	import SpecialThanksList from './credit-list/special-thanks.json';
</script>

<WipeoutHero />
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Staff</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each StaffList as { name, href, description, avatarPath }}
				<div class="flex flex-col items-center w-64">
					<img src={avatarPath} class="h-24 w-24 mask mask-circle" alt="{name} avatar" />
					<a {href} class="text-center link link-hover font-bold mt-4">{name}</a>
					{#if description}
						<p class="text-center">{description}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-100">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Sponsors</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-4xl">
			{#each SponsorList as { name, href, description, avatarPath }}
				<div class="flex flex-col items-center w-64">
					<img src={avatarPath} class="h-24 w-24" alt="{name} logo" />
					<a {href} class="text-center link link-hover font-bold mt-4">{name}</a>
					{#if description}
						<p class="text-center">{description}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Special Thanks</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each SpecialThanksList as { name, href, description, avatarPath }}
				<div class="flex flex-col items-center w-64">
					<img src={avatarPath} class="h-24 w-24 mask mask-circle" alt="{name} avatar" />
					<a {href} class="text-center link link-hover font-bold mt-4">{name}</a>
					{#if description}
						<p class="text-center">{description}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
