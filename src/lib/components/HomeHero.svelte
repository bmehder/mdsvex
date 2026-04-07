<section class="hero-section">
	<div class="outer">
		<div class="inner">
			<img
				src="/haarlem.jpg"
				width="1200"
				height="600"
				alt="Traditional Dutch windmill in Haarlem beside colorful canal houses at sunset"
			/>
			<div>Welkom in Haarlem!</div>
		</div>
	</div>
</section>

<style>
	.inner {
		display: grid;
		align-items: center;

		img {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}

		div {
			grid-column: 1 / 2;
			grid-row: 1 / 2;

			padding: 1rem;
			background-color: rgba(0, 0, 0, 0.6);

			text-align: center;
			text-transform: uppercase;
			font-size: clamp(1.5rem, 3vw, 3rem);
			font-weight: bold;
			letter-spacing: 3px;
		}
	}
</style>
