<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<PageTitle title="Home"></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<img src="/hero.jpg" width="1200" height="600" alt="Rocky mountain landscape with waterfalls and low clouds" />
		</div>
	</div>
</section>

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
