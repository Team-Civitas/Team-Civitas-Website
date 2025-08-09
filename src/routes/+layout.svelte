<script lang="ts">
	import dropdownIcon from '$img/dropdown.webp';
	import civitasIcon from '$img/logotypes/team-civitas/Team Civitas Sleek.svg';
	import '$res/global.css';
	import favicon from '$img/logotypes/team-civitas/Team Civitas Sleek.svg';

	import NavLinks from '$lib/Navbar/NavLinks.svelte';
	import MobileDropdown from '$lib/Navbar/MobileDropdown.svelte';

	let dropdownOpen = $state(false);

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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

<style>
	.navbar {
		background-color: var(--card-bg);
		height: 60px;
		width: 100vw;

		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed; /* changed from fixed */
		padding: 0 1rem;
	}

	.links {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: none;
		align-items: center;
		height: 100%;
	}

	.dropdown-toggle {
		background-color: transparent;
		border-color: transparent;
	}

	/* Keep dropdown-toggle on right */
	@media (min-width: 1025px) {
		.dropdown-toggle {
			display: none;
		}

		.links {
			display: flex;
		}
	}

	.nav-img {
		width: 50px;
		height: 50px;
	}
</style>

{@render children()}