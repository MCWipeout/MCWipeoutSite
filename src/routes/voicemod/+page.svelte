<script lang="ts">
	import TermsAndConditions from './data/terms-and-conditions.md';
</script>

<svelte:head>
	<title>MCWipeout x Voicemod Clip Competition</title>
</svelte:head>

<div
	class="hero min-h-screen"
	style="background-image: url('/background-img/main/1.webp');"
	id="voicemodHero"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content flex flex-col">
		<div>
			<div class="flex flex-col lg:flex-row max-w-3xl items-center gap-8">
				<img src="logo.webp" class="max-h-36" alt="MC Wipeout logo" />
				<svg
					fill="#ffffff"
					height="50px"
					width="50px"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 460.775 460.775"
					xml:space="preserve"
					><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><g id="SVGRepo_iconCarrier">
						<path
							d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
						/>
					</g></svg
				>
				<img src="/voicemod-contest/voicemod-logo.png" class="max-h-36" alt="Voicemod logo" />
			</div>
			<h1 class="mb-5 mt-8 text-5xl font-bold max-w-3xl mx-auto">
				MCWipeout fans can win an Elgato Stream Deck by submitting a Voicemod clip!
			</h1>
			<p class="mb-5 max-w-md mx-auto">
				Win one of two Elgato Stream Decks courtesy of our event sponsor by Tweeting your best
				gaming clip using Voicemod!
			</p>
			<p class="mb-5 max-w-md mx-auto">
				Competition will close <span class="font-bold">November 10th 2023 at 12pm EST</span>.
			</p>
			<a
				class="btn btn-primary"
				target="_blank"
				rel="noopener noreferrer"
				href="https://twitter.com/intent/tweet?hashtags=MCWVoicemod">Tweet your clip</a
			>
		</div>
		<a class="link link-hover" href="#termsAndConditions">Terms and Conditions</a>
	</div>
</div>
<div class="hero min-h-screen bg-base-200" id="termsAndConditions">
	<div class="hero-content">
		<div class="max-w-prose prose">
			<TermsAndConditions />
		</div>
	</div>
</div>
