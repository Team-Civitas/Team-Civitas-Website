<script>
	import { logotype } from '$lib/IconManager';

	let { children } = $props();

	import { page } from '$app/stores';
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<svelte:head>
	<link rel="icon" href={logotype} />
</svelte:head>

<nav>
	<div>
		<img src={logotype} alt="logo" />
		<div>
			<NavLink href="/" />
			<NavLink href="/projekt" />
			<NavLink href="/identitet" />
			<NavLink href="/om-oss" />
		</div>
	</div>
</nav>

<main>
	{@render children?.()}
</main>

<style>
	@import '/global.css';

	nav {
		color: white;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 19.27%, rgba(0, 0, 0, 0) 100%);

		font-size: large;
	}

	nav > div {
		max-width: 50%;
		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	nav img {
		width: 50px;
		height: 50px;
	}
</style>
