<script lang="ts">
	const footerContent = [
		{
			id: 'links',
			title: 'Links',
			links: [
				{
					text: 'solo.to',
					href: 'https://solo.to/mcwipeout'
				},
				{
					text: 'Twitter',
					href: 'https://twitter.com/mc_wipeout'
				},
				{
					text: 'Discord',
					href: 'https://discord.gg/b8DGdBjuNR'
				}
			]
		}
	];
</script>

<footer class="footer footer-center p-10 bg-neutral text-neutral-content" data-sveltekit-reload>
	<div>
		<img src="/logo.webp" alt="MCWipeout Logo" draggable="false" class="h-24" />
		<p>
			An event by
			<a
				target="_blank"
				rel="noopener noreferrer"
				class="link link-hover"
				href="https://solo.to/j48"
			>
				J48
			</a>
		</p>
	</div>
	{#each footerContent as { id, title, links } (id)}
		<section {id}>
			<span class="footer-title text-base">{title}</span>
			<div class="flex flex-row gap-4">
				{#each links as { href, text }}
					<a target="_blank" rel="noopener noreferrer" class="link link-hover text-base" {href}
						>{text}</a
					>
				{/each}
			</div>
		</section>
	{/each}
</footer>
