<script>
	import { formatDate } from '$lib/util.js'
	import PageTitle from '$lib/components/PageTitle.svelte'
	
	const { data } = $props()
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<PageTitle title="Portfolio"></PageTitle>

<article>
	<div class="outer">
		<div class="inner">
			<ul class="grid auto-fill gap-3 padding-0 list-style-none">
				{#each data.posts as post}
					<li>
						<div>
							<div class="opacity-5">{formatDate(post.meta.date)}</div>
							<h2>
								<a href="/portfolio/{post.slug}">
									{post.meta.title}
								</a>
							</h2>
						</div>
						<div>{post.meta.excerpt}</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</article>
