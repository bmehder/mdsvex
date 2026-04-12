<script>
	import logo from '$lib/assets/logo.png'
</script>

<header>
	<div class="outer">
		<div class="inner">
			<a class="logo" href="/"><img src={logo} alt="acme logo" /></a>
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/blog/">Blog</a></li>
					<li><a href="/portfolio/">Portfolio</a></li>
					<li><a href="/contact/">Contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	.outer {
		background-color: dodgerblue;
		font-size: 1.2rem;
	}

	.inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.logo {
		filter: invert(1);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		padding: 0;
		list-style: none;
	}

	img {
		max-width: 12rem;
	}

	a {
		color: white;
	}
</style>
