<script>
	import { formatDate } from '$lib/utils.js'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Card from '$lib/components/Card.svelte'

	const { data } = $props()
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<PageTitle title="Portfolio" />

<section>
	<div class="outer">
		<div class="inner grid auto-fill gap-3">
			{#each data.posts as post}
				<Card
					image={post.meta.image}
					eyebrow={formatDate(post.meta.date)}
					title={post.meta.title}
					buttonUrl={'/portfolio/' + post.slug}
					description={post.meta.excerpt}
				/>
			{/each}
		</div>
	</div>
</section>
