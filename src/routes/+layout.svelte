<script>
	import { logotype } from "$lib/IconManager";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logotype} />
</svelte:head>

{@render children?.()}

<style>
	@import '/global.css';
</style>