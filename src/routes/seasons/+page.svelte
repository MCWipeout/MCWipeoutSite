<script>
	export let data;
	const { seasonList: SeasonList } = data;
</script>

<div class="max-w-4xl mx-auto my-8 min-h-screen flex flex-col gap-2 px-4 lg:px-0">
	<h1 class="text-center text-5xl font-bold mb-4">Past Seasons</h1>
	{#each SeasonList as season}
		<div class="card bg-base-200 shadow-xl">
			<figure>
				<img src={season.image} alt="{season.title} banner" class="max-h-32 w-full object-cover" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{season.title}</h2>
				<p>{season.description}</p>
				<div class="card-actions justify-end">
					<a class="btn btn-primary" href="/seasons/{season.slug}">Read More</a>
				</div>
			</div>
		</div>
	{/each}
</div>
