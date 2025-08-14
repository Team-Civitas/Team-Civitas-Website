<script>
	import favicon from '$lib/icons/logotype.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/global.css" />
</svelte:head>

<navbar>
	<ul>
		<li><a href="/">Hem</a></li>
		<li><a href="/oms-oss">Om oss</a></li>
		<li><a href="/projekt">Projekt</a></li>
		<li><a href="/identitet">Identitet</a></li>
		<li><a href="/sociala-medier">Sociala Medier</a></li>
	</ul>
</navbar>

{@render children?.()}
