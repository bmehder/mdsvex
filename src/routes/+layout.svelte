<script>
	import '$lib/style.css'
	import favicon from '$lib/assets/favicon.svg'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-wrapper">
	<Header></Header>

	<main>{@render children()}</main>
	
	<Footer></Footer>
</div>

<style>
	.page-wrapper {
		min-height: 100svh;
		display: grid;
		align-content: start;
		grid-template-rows: auto 1fr auto;
	}

	main {
		padding-bottom: 3rem;
	}
</style>
