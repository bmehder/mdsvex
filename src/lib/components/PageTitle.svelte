<script>
	import { formatDate } from '$lib/util'

	let { title, date } = $props()
</script>

<div class="page-title">
	<div class="outer">
		<div class="inner">
      <h1>{title}</h1>
      <div class="opacity-5">
        {formatDate(date)}
      </div>
		</div>
	</div>
</div>

<style>
  .inner {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid;
  }
</style>