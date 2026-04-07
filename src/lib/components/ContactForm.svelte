<form class="form">
	<div>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required />
	</div>

	<div>
		<label for="email">Email</label>
		<input type="email" id="email" name="email" required />
	</div>

	<div>
		<label for="phone">Phone</label>
		<input type="tel" id="phone" name="phone" />
	</div>

	<div>
		<label for="message">Message</label>
		<textarea id="message" rows="8" name="message" required></textarea>
	</div>

	<button type="submit">Send Message</button>
</form>

<style>
	form {
		max-width: 32rem;
		display: grid;
		gap: 1rem;
	}

	div {
		display: grid;
	}

	button {
		padding-block: 0.8rem;
	}
</style>