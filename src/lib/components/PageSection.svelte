<script lang="ts">
	import Icon from '@iconify/svelte';

	export let id: string;
	export let title: string;
</script>

<section {id}>
	<div class="flex flex-row items-center">
		<h2 class="text-2xl font-bold flex-grow">
			{@html title}
		</h2>
		{#if $$slots.info}
			<div class="dropdown dropdown-hover dropdown-end">
				<label class="btn m-1" for="" tabindex="0">
					<Icon icon="bx:info-circle" height="24" width="24" />
				</label>
				<div class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
					<slot name="info" />
				</div>
			</div>
		{/if}
	</div>

	<div class="md:shadow md:rounded-lg p-2">
		<slot />
	</div>
</section>
