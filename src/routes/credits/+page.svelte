<script>
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';
	const staff = [
		{
			name: 'J48',
			href: 'https://solo.to/j48',
			description: 'Owner',
			avatarPath: '/avatar/avatar-j48.jpg'
		},
		{
			name: 'bumpyJake',
			href: 'https://solo.to/bumpyjake',
			description: 'Administrator',
			avatarPath: '/avatar/avatar-bumpyjake.jpg'
		},
		{
			name: 'theinnerdomain',
			href: 'https://twitter.com/Theinnerdomain',
			avatarPath: '/avatar/avatar-theinnerdomain.jpg',
			description: 'Sound Developer'
		},
		{
			name: 'JoeyCapollo',
			href: 'https://twitter.com/JoeyCapollo',
			avatarPath: '/avatar/avatar-joeycapollo.jpg',
			description: 'Creative Director'
		}
	];

	const sponsors = [
		{
			name: 'solo.to',
			href: 'https://solo.to/',
			avatarPath: '/logo/logo-soloto.png',
			description: 'Create easily sharable landing pages for all your social media.'
		},
		{
			name: 'MCProHosting',
			href: 'https://mcprohosting.com/',
			avatarPath: '/logo/logo-mcprohosting.jpg',
			description: "MCProHosting is the world's largest and leading Game Server Hosting provider!"
		},
		{
			name: 'E-Pal',
			href: 'https://www.epal.gg/',
			avatarPath: '/logo/logo-epal.jpg',
			description: 'E-Pal is the best place to meet friends to play with!'
		}
	];
</script>

<WipeoutHero />
<div class="hero py-16 bg-base-200">
	<div class="hero-content flex-col">
		<h1 class="text-5xl font-bold grow mb-4">Staff</h1>
		<div class="flex flex-row flex-wrap gap-x-2 gap-y-8 justify-around max-w-6xl">
			{#each staff as { name, href, description, avatarPath }}
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
			{#each sponsors as { name, href, description, avatarPath }}
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
