<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Section from '$lib/components/Section.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte'
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<PageTitle title="Contact" />

<section>
	<div class="outer">
		<div class="inner">
			<h2>Send us a Message</h2>
			<ContactForm />
		</div>
	</div>
</section>