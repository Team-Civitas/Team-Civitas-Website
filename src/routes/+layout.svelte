<script>
	import { logotype } from '$lib/IconManager';

	let { children } = $props();

	import { page } from '$app/stores';
	import NavLink from '$lib/components/NavLink.svelte';
	import NavMegaMenu from '$lib/components/NavMegaMenu.svelte';
</script>

<svelte:head>
	<link rel="icon" href={logotype} />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<nav>
	<div>
		<a class="nav-logo" href="/">
			<img src={logotype} alt="logo" />
			<p>Team Civitas</p>
		</a>

		<div class="links">
			<NavLink href="/" />
			<NavLink href="/om-oss" />
			<NavMegaMenu name="Projekt" hrefs={["/modpacks", "/spelkartor", "/logotyper", "/servrar"]}/>
			<NavLink href="/sociala-medier" />
		</div>
	</div>
</nav>

<main>
	{@render children?.()}
</main>

<style>
	@import '/global.css';

	nav {
		color: var(--primary-color);
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 19.27%, rgba(0, 0, 0, 0) 100%);

		font-size: large;
		position: absolute;
		width: 100%;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		font-family: 'Archivo Black', sans-serif;
		font-size: 1.5rem;
		text-decoration: none;
	}

	.nav-logo p {
		margin-left: 5px;
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

	.links {
		display: flex;
		flex-direction: row;
	}
</style>
