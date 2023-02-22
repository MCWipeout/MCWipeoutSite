<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';

	const dispatch = createEventDispatcher();

	export let error: {
		message: string;
	} = { message: 'Not sure what caused this.' };
	export let showRetry = true;

	function reload() {
		dispatch('reload');
	}
</script>

<div class="flex flex-col align-middle justify-center p-6 text-center">
	<Icon icon="bxs:error-alt" class="self-center h-12 w-12" />
	<h1 class="text-lg">This section failed to load.</h1>
	<h2 class="text-sm">{error.message}</h2>
	{#if showRetry}
		<button class="btn mt-2 max-w-md self-center" on:click={reload} on:keydown={reload}
			>Reload</button
		>
	{/if}
</div>
