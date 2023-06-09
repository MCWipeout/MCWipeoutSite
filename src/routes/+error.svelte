<script lang="ts">
	import { page } from '$app/stores';

	console.log($page.error);
</script>

<div class="hero min-h-screen" style="background-image: url(/background-img/presskit-1.webp);">
	<div class="hero-overlay bg-opacity-90" />
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl lg:text-8xl font-bold pb-2">{$page.status}</h1>
			<a class="link link-hover text-base" href="/">Click here to go back to the home page.</a>
		</div>
	</div>
</div>
