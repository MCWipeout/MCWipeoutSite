<script lang="ts">
	import ThemeSelect from './ThemeSelect.svelte';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Sponsors', href: '/sponsors' },
		{ label: 'Seasons', href: '/seasons' },
		{ label: 'News', href: '/news' },
		{ label: 'Credits', href: '/credits' }
	];
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="dropdown">
				<label class="btn btn-ghost lg:hidden" for="menu" tabindex="0">
					<svg
						id="menu"
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 gap-y-2"
					tabindex="0"
				>
					{#each navItems as { href, label }}
						<li>
							<a {href} data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover"
								>{label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<a class="btn btn-ghost" href="/">
				<img src="/logo.webp" alt="MCWipeout Logo" draggable="false" class="h-12" />
			</a>
		</div>
		<div class="navbar-end hidden lg:flex">
			{#each navItems as { href, label }}
				<a
					class="btn btn-ghost"
					{href}
					data-sveltekit-preload-code="hover"
					data-sveltekit-preload-data="hover">{label}</a
				>
			{/each}
			<ThemeSelect />
		</div>
	</div>
</header>
