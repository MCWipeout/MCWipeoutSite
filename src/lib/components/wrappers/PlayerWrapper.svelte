<script lang="ts">
	import Icon from '@iconify/svelte';

	export let uuid: string | undefined = undefined;
	export let name: string | undefined = undefined;
</script>

<a
	data-sveltekit-preload-data="hover"
	href={name ? `/players/${name}` : null}
	class="flex items-center gap-2"
	class:link={name}
	class:link-hover={name}
>
	{#if uuid}
		<img
			src="https://mc-heads.net/avatar/{uuid}/128"
			alt="Player head"
			class="rounded-sm h-4 w-4"
			draggable="false"
		/>
	{:else}
		<Icon icon="bx:question-mark" class="w-6 h-6" />
	{/if}
	<span class="truncate hover:overflow-visible">
		{name ?? 'TBA'}
	</span>
</a>
