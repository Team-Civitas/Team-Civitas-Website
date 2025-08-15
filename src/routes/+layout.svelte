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
		<div class="nav-logo">
			<img src={logotype} alt="logo" />
			<p>Team Civitas</p>
		</div>

		<div>
			<NavLink href="/" />
			<NavLink href="/om-oss" />
			<button>Projekt</button>
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
</style>
