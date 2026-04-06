<script>
	import { page } from '$app/state'
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<PageTitle title={page.status}></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<p>{page.error.message}</p>
		</div>
	</div>
</section>
