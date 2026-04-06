<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
	import { formatDate } from '$lib/util.js'

	const { data } = $props()

	const Post = $derived(data.post.component)
</script>

<svelte:head>
  <title>{data.post.meta.title}</title>
</svelte:head>

<PageTitle title={data.post.meta.title}>
	{formatDate(data.post.meta.date)}
</PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<Post />
		</div>
	</div>
</section>


