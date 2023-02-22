<script lang="ts">
	import SearchBar from '$lib/unused/components/SearchBar.svelte';
	import ThemeSelect from './ThemeSelect.svelte';

	const navItems = [{ label: 'Home', href: '/' }];
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
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
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-fit gap-y-2"
				>
					{#each navItems as { href, label }}
						<li><a {href}>{label}</a></li>
					{/each}
					<SearchBar />
					<ThemeSelect />
				</ul>
			</div>
			<a class="btn btn-ghost normal-case text-xl" href="/">
				<img
					src="/logo.png"
					width="32"
					height="32"
					alt="MC Wipeout logo"
					class="mr-2"
					draggable="false"
				/>
				MC Wipeout
			</a>
		</div>
		<div class="navbar-end hidden lg:flex">
			<ul class="menu menu-horizontal p-0 gap-x-2 rounded-box">
				{#each navItems as { href, label }}
					<li><a {href}>{label}</a></li>
				{/each}
				<SearchBar />
				<ThemeSelect />
			</ul>
		</div>
	</div>
</header>
