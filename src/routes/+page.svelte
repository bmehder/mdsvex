<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
	import HomeHero from '$lib/components/HomeHero.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<PageTitle title="Home"></PageTitle>

<HomeHero />

<section>
	<div class="outer">
		<div class="inner">
			<h2>Welcome to SvelteKit</h2>
			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
				documentation
			</p>
		</div>
	</div>
</section>