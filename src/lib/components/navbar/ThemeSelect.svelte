<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { themeChange } from 'theme-change';
	import Icon from '@iconify/svelte';

	let theme = 'dark';
	onMount(() => {
		themeChange(false);
		theme = localStorage.getItem('theme') ?? 'adjust';
	});

	$: icon = theme === 'light' ? 'sun' : theme === 'dark' ? 'moon' : 'adjust';
</script>

<div class="dropdown dropdown-end">
	<label class="btn btn-ghost" for="toggleTheme" tabindex="0">
		{#key icon}
			<div in:fly>
				<Icon icon="bx:{icon}" width="24" height="24" />
			</div>
		{/key}
		<div class="lg:hidden">Set theme</div>
	</label>
	<ul class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
		<li>
			<button class="w-full" data-set-theme="" on:click={() => (theme = '')}>
				<Icon icon="bx:adjust" width="24" height="24" />
				System default
			</button>
		</li>
		<li>
			<button class="w-full" data-set-theme="light" on:click={() => (theme = 'light')}>
				<Icon icon="bx:sun" width="24" height="24" />
				Light mode
			</button>
		</li>
		<li>
			<button class="w-full" data-set-theme="dark" on:click={() => (theme = 'dark')}>
				<Icon icon="bx:moon" width="24" height="24" />
				Dark mode
			</button>
		</li>
	</ul>
</div>
