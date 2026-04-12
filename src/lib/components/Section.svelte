<script>
	let {
		headingText = 'ADD A HEADING FOR A11Y!',
		section,
		skins,
		container,
		heading,
		layout,
		children,
	} = $props()
</script>

<section class={'section ' + section}>
	<div class={'skins ' + skins}>
		<div class={'inner ' + container}>
			<h2 class={'section_heading ' + heading}>{headingText}</h2>
			<div class={'layout ' + layout}>
				{@render children?.()}
			</div>
		</div>
	</div>
</section>
