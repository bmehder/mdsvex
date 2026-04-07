<script>
	let { 
		image,
		eyebrow,
		title,
		description,
		buttonLabel = "Learn More &raquo",
		buttonUrl
	} = $props()
</script>

<article class="card">
	<img class="card-image" src={image} alt="describe the thing here..." />
	<div class="card-info">
		<div>
			<div class="card-eyebrow">{eyebrow}</div>
			<h3 class="card-title">{title}</h3>
		</div>
		<div class="card-description">{description}</div>
		<a class="card-button button" href={buttonUrl}>
			{@html buttonLabel}
		</a>
	</div>
</article>

<style>
	/* Resets */
	* {
		box-sizing: border-box;
	}
	
	img {
		display: block;
		width: 100%;
		height: auto;
	}

	.button {
		padding-block: 0.75rem;
		padding-inline: 1.5rem;
		background-color: dodgerblue;
		color: white;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: bold;
		letter-spacing: 0.15px;
		border-radius: 0.25rem;
	}
	
	/* Component Styles */
	.card {
	  display: grid;
	  grid-template-rows: auto 1fr;
	  background-color: white;
	  color: black;
	  border-radius: 0.25rem;
	  overflow: hidden;
	}

	.card-image {
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	.card-info {
	  display: grid;
	  grid-template-rows: auto 1fr auto;
	  gap: 1rem;
	  padding: 1rem;
	}

	.card-title, .card-eyebrow {
		margin: 0;
	}
	
	.card-eyebrow {
	  color: slategray;
	  font-size: 0.7rem;
	  text-transform: uppercase;
	  letter-spacing: 0.7px;
	}

	.card-description {
		font-size: 0.8rem;
		text-wrap: pretty;
	}
</style>