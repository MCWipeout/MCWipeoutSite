<script lang="ts">
    export let season: {
        image: string,
        title: string,
        description: string,
        slug: string
    }
</script>

<div class="card bg-base-200 shadow-xl">
    <figure>
        <img src={season.image} alt="{season.title} banner" class="max-h-32 w-full object-cover" loading="lazy" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{season.title}</h2>
        <p>{season.description}</p>
        <div class="card-actions justify-end">
            <a class="btn btn-primary" href="/seasons/{season.slug}">Read More</a>
        </div>
    </div>
</div>