<script>
	let { title, children } = $props()
</script>

<section>
	<div class="outer">
		<div class="inner">
      <h1>{title}</h1>
      <div class="opacity-5">
        {@render children?.()}
      </div>
		</div>
	</div>
</section>

<style>
  .inner {
    --inner-padding-block: 3rem;
    
    margin-bottom: 1.5rem;
    border-bottom: 1px solid;
  }
</style>