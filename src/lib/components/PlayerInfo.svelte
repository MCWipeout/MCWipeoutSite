<script lang="ts">
	import type { PlayerInfo } from '$lib/types/types';

	import Icon from '@iconify/svelte';

	import { getIsometricPlayerSkinUrl } from '$lib/helpers/skinApiHelper';

	export let playerInfo: PlayerInfo;
	let { mcUsername, uuid, youtube, twitter, twitch } = playerInfo;

	export let skinWidth = 180;
</script>

<div class="player-info flex flex-col gap-y-2">
	<h1 class="text-2xl text-center font-bold self-center bg-base-300 rounded-lg px-2">
		{mcUsername}
	</h1>
	<img
		src={getIsometricPlayerSkinUrl(uuid, skinWidth)}
		width={skinWidth}
		height={skinWidth * 2.4}
		alt="Avatar of {mcUsername}"
		class="mx-auto drop-shadow-lg"
		draggable="false"
	/>

	<ul class="menu menu-horizontal bg-base-100 rounded-box mx-auto">
		{#if twitter}
			<li>
				<a href="https://twitter.com/{twitter}" rel="external" data-sveltekit-reload>
					<Icon icon="bxl:twitter" width="24" height="24" />
				</a>
			</li>
		{/if}
		{#if youtube}
			<li>
				<a href={youtube} rel="external" data-sveltekit-reload>
					<Icon icon="bxl:youtube" width="24" height="24" />
				</a>
			</li>
		{/if}
		{#if twitch}
			<li>
				<a href="https://twitch.tv/{twitch}" rel="external" data-sveltekit-reload>
					<Icon icon="bxl:twitch" width="24" height="24" />
				</a>
			</li>
		{/if}
	</ul>
</div>
