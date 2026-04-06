<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<PageTitle title="Contact"></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<h2>Send us a message</h2>
			<form class="form" onsubmit={event => event.preventDefault}>
				<div>
					<label for="name">Name</label>
					<input type="text" id="name" required />
				</div>

				<div>
					<label for="email">Email</label>
					<input type="email" id="email" required />
				</div>

				<div>
					<label for="phone">Phone</label>
					<input type="tel" id="phone" />
				</div>

				<div>
					<label for="message">Message</label>
					<textarea id="message" rows="8" required></textarea>
				</div>

				<button type="submit">Send Message</button>
			</form>
		</div>
	</div>
</section>

<style>
	.form {
		max-width: 32rem;
		display: grid;
		gap: 1rem;
	}

	.form > div {
		display: grid;
	}

</style>
