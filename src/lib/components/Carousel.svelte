<script lang="ts">
    export let images: string[];
    export let carouselHeight;

    let carouselElement: HTMLDivElement;

    function carouselScroll(toImage: number) {
		// Scroll to takes 2 arguments. One is the pixel in the x axis, the second is the pixel in the y axis
		// We take the clientWidth of the carousel element and add 1 pixel to scroll to the given image
		carouselElement.scrollTo((carouselElement.clientWidth * (toImage - 1)) + 1, 0);
	}
</script>

<div class="carousel rounded-box" bind:this={carouselElement} bind:clientHeight={carouselHeight}>
    {#each images as img, i}
        <div
            id="slide{i}"
            class="carousel-item relative w-full"
        >
            <img
                src={img}
                class="w-full"
                alt="Screenshot {i + 1}"
                loading="lazy"
            />
            <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
                <button
                    on:click={() => carouselScroll(((((i - 1) % images.length) + images.length) % images.length) + 1)}
                    class="btn btn-circle">
                    ❮
                </button>
                <button
                    on:click={() => carouselScroll(((((i + 1) % images.length) + images.length) % images.length) + 1)}
                    class="btn btn-circle">
                    ❯
                </button>
            </div>
        </div>
    {/each}
</div>