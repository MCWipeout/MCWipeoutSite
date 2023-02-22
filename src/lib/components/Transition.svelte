<!-- Transition.svelte -->
<script lang="ts">
	import reducedMotionStore from '$lib/stores/reducedMotionStore';
	import { fly, fade } from 'svelte/transition';
	export let value: any;
</script>

{#key value}
	{#if $reducedMotionStore}
		<div transition:fade={{ duration: 100 }} class="w-full">
			<slot />
		</div>
	{:else}
		<div in:fly={{ delay: 100, duration: 200 }} out:fly={{ duration: 100 }} class="w-full">
			<slot />
		</div>
	{/if}
{/key}
