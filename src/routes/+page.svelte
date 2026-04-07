<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<PageTitle title="Home"></PageTitle>

<section class="hero-section">
	<div class="outer">
		<div class="inner">
			<img
				src="/haarlem.jpg"
				width="1200"
				height="600"
				alt="Rocky mountain landscape with waterfalls and low clouds"
			/>
			<div>Welkom in Haarlem!</div>
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

<style>
	.hero-section {
		.inner {
			display: grid;
			align-items: center;
			
			img {
				grid-column: 1 / 2;
				grid-row: 1 / 2;
			}
			
			div {
				grid-column: 1 / 2;
				grid-row: 1 / 2;
				
				padding: 1rem;
				background-color: rgba(0, 0, 0, 0.6);
				
				text-align: center;
				text-transform: uppercase;
				font-size: clamp(1.5rem, 3vw, 3rem);
				font-weight: bold;
				letter-spacing: 3px;
			}
		}
	}
</style>
