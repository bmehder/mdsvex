<script>
	import { formatDate } from '$lib/utils.js'
	import PageTitle from '$lib/components/PageTitle.svelte'

	const { data } = $props()
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTitle title="Blog" />

<section>
	<div class="outer">
		<div class="inner grid gap-3">
			{#each data.posts as post}
				<article>
					<div class="opacity-5">{formatDate(post.meta.date)}</div>
					<h2>
						<a href="/blog/{post.slug}">
							{post.meta.title}
						</a>
					</h2>
					<div>{post.meta.excerpt}</div>
				</article>
			{/each}
		</div>
	</div>
</section>
