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
		<div class="inner grid gap-4">
			{#each data.posts as post}
				<article>
					<div class="grid gap-1">
						<div class="opacity-5">{formatDate(post.meta.date)}</div>
						<h2>
							<a href="/blog/{post.slug}">
								{post.meta.title}
							</a>
						</h2>
						<a href="/blog/{post.slug}"><img src={post.meta.image} alt=""></a>
						<p>{post.meta.excerpt}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	h2 {
		margin: 0;
	}
	img {
		max-width: 65ch;
	}
</style>