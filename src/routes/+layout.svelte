<script lang="ts">
	import NavLinks from '$lib/Navbar/NavLinks.svelte';
	import MobileDropdown from '$lib/Navbar/MobileDropdown.svelte';
	import { onMount } from 'svelte';

	import dropdownIcon from '$img/dropdown.webp';
	import civitasIcon from '$img/logotypes/team-civitas/Team Civitas Sleek.svg';
	const favicon = civitasIcon;

	let dropdownOpen = $state(false);

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	let onRoot = $state(false);
	onMount(() => {
		onRoot = location.pathname == '/';
	});

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/global.css" />
</svelte:head>

{#if !onRoot}
	<a href="../" id="tillbaka">‹</a>
{/if}

<nav class="navbar">
	<a href="/" class="navbar-logo">
		<img class="nav-img" src={civitasIcon} alt="Team Civitas logotyp" draggable="false" />
	</a>

	<div class="links">
		<NavLinks />
	</div>

	<button class="dropdown-toggle" onclick={toggleDropdown}>
		<img class="nav-img" src={dropdownIcon} alt="Meny ikon" />
	</button>

	{#if dropdownOpen}
		<MobileDropdown />
	{/if}
</nav>

<main>
	{@render children()}
</main>

<footer>
	<div class="footer-brand">
		<a href="/" aria-label="Tillbaka till startsidan">
			<img src={civitasIcon} alt="Team Civitas logotyp" draggable="false" />
		</a>
		<p>&copy; Team Civitas</p>
	</div>
</footer>

<style>
	.navbar {
		background-color: var(--card-bg);
		width: 100vw;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.links {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: none;
		align-items: center;
	}

	.links :global(ul) {
		list-style: none;
		display: flex;
		gap: 20px;
		font-size: large;
	}

	.dropdown-toggle {
		background-color: transparent;
		border-color: transparent;
	}

	@media (min-width: 1025px) {
		.dropdown-toggle {
			display: none;
		}

		.links {
			display: flex;
		}
	}

	.nav-img {
		padding: 0.2rem;
		width: 50px;
		height: 50px;
	}

	.footer-brand {
		background-color: var(--card-bg);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.footer-brand img {
		width: 80px;
		height: 80px;

		padding-top: 2vh;
	}
</style>
