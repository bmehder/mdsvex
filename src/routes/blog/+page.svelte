<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
	import { formatDate } from '$lib/util.js'
	
	const { data } = $props()
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTitle title="Blog"></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<ul class="grid gap-3 padding-0 list-style-none">
				{#each data.posts as post}
					<li>
						<div>
							<div class="opacity-5">{formatDate(post.meta.date)}</div>
							<h2>
								<a href="/blog/{post.slug}">
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
</section>
