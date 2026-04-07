<script>
	import PageTitle from '$lib/components/PageTitle.svelte'
	import ContactForm from '$lib/components/ContactForm.svelte'
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<PageTitle title="Contact" />

<section>
	<div class="outer">
		<div class="inner">
			<h2>Send Us a Message</h2>
			<ContactForm />
		</div>
	</div>
</section>
