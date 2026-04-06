<script>
	let count = $state(0)

  const decrement = () => (count -= 1)
  const increment = () => (count += 1)
</script>

<div class="counter">
	<button onclick={decrement}>-</button>
	<div class="count">{count}</div>
	<button onclick={increment}>+</button>
</div>

<style>
	.counter {
		display: grid;
		grid-template-columns: 4rem 3.5rem 4rem;
		gap: 0.5rem;
		text-align: center;
	}

	.count {
		font-size: 2rem;
	}
</style>
