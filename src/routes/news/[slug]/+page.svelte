<script>
	import WipeoutHero from '$lib/components/WipeoutHero.svelte';

	export let data;
	const { title, date, Content } = data;
</script>

<article class="prose prose-sm lg:prose-lg my-8 mx-auto min-h-screen lg:p-0 p-2">
	<div class="lg:prose-xl my-8 mx-auto lg:p-0 p-2">
		<h1>{title}</h1>
		<p>Published: {date}</p>
	</div>
	<div class="divider" />
	<Content />
</article>
