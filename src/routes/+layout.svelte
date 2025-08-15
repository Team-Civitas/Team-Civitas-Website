<script>
	import { logotype } from '$lib/IconManager';

	let { children } = $props();

	import { page } from '$app/stores';
</script>

<svelte:head>
	<link rel="icon" href={logotype} />
</svelte:head>

<nav>
	<div>
		<img src={logotype} alt="logo" />
		<div>
			<a href="/" class:active={$page.url.pathname == '/'}>Hem</a>
			<a href="/projekt" class:active={$page.url.pathname == '/projekt'}>Projekt</a>
			<a href="/identitet" class:active={$page.url.pathname == '/identitet'}>Identitet</a>
			<a href="/om-oss" class:active={$page.url.pathname == '/om-oss'}>Om oss</a>
		</div>
	</div>
</nav>

<div class="container">
	{@render children?.()}
</div>

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

	nav a {
		color: white;
		text-decoration: none;

		padding: 2px;
		margin: 0 10px;

		transition: color 0.3s ease;
	}

	nav a:hover,
	nav a.active {
		color: aqua;
	}

	.container {
		max-width: 90%;
		margin: 0 auto;
	}
</style>
