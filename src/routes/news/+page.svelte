<script>
	export let data;
</script>

<div class="max-w-4xl mx-auto my-8 min-h-screen flex flex-col gap-2 px-4 lg:px-0">
	<h1 class="text-center text-5xl font-bold mb-4">Blog</h1>
	{#each data.posts as post}
		<div class="card bg-base-200 shadow-xl">
			<figure>
				<img
					src={post.meta.image}
					alt="{post.meta.title} banner"
					class="max-h-32 w-full object-cover"
					loading="lazy"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{post.meta.title}</h2>
				<p>{post.meta.description}</p>
				<div class="card-actions justify-end">
					<a class="btn btn-primary" href="/news/{post.path}">Read More</a>
				</div>
			</div>
		</div>
	{/each}
</div>
