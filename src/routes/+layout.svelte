<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Transition from '$lib/components/Transition.svelte';

	import type { LayoutData } from './$types';

	import '../app.css';

	export let data: LayoutData;
	let { url } = data;
	$: ({ url } = data);
</script>

<Navbar />
<main>
	<Transition value={url.toString()}>
		<slot />
	</Transition>
</main>
<Footer />
