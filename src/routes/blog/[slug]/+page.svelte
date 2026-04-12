<script>
	import { formatDate } from '$lib/utils.js'
	import PageTitle from '$lib/components/PageTitle.svelte'

	const { data } = $props()

	const Post = $derived(data.post.component)
</script>

<svelte:head>
	<title>{data.post.meta.title}</title>
</svelte:head>

<PageTitle title={data.post.meta.title} date={data.post.meta.date} />

<article>
	<div class="outer">
		<div class="inner grid gap-1">
			<img src="/{data.post.meta.image}" alt="">
			<div>
				<Post />
			</div>
		</div>
	</div>
</article>