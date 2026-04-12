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
					<div class="grid gap-1-5">
						<a href="/blog/{post.slug}"><img src={post.meta.image} alt=""></a>
						<div>
							<div class="opacity-5">{formatDate(post.meta.date)}</div>
							<h2>
								<a href="/blog/{post.slug}">
									{post.meta.title}
								</a>
							</h2>
							<p>{post.meta.excerpt}</p>
						</div>
						<a href="/blog/{post.slug}" class="button">Read More &raquo</a>
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
	
	article {
		max-width: 65ch;
		padding-bottom: 3rem;
		border-bottom: 1px solid gray;
	}

	.button {
		justify-self: start;
	}
</style>