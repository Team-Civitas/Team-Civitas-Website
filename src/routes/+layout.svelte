<script>
	import { logotype } from '$lib/IconManager';

	let { children } = $props();

	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import NavLink from '$lib/components/NavLink.svelte';
	import NavMegaMenu from '$lib/components/NavMegaMenu.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
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
			<p class="nav-logo-text">Team Civitas</p>
		</a>

		<div class="links">
			<NavLink href="/" />
			<NavLink href="/om-oss" />
			<NavMegaMenu name="Projekt" hrefs={['/modpacks', '/spelkartor', '/logotyper', '/servrar']} />
			<div class="sociala-medier-navlink">
				<NavLink name="Sociala Medier" href="https://linktr.ee/teamcivitas" />
			</div>
			<a href="https://linktr.ee/teamcivitas" class="sociala-medier-manual-link"
				><img src="/src/lib/assets/Images/screen.webp" /></a
			>
		</div>
	</div>
</nav>

{@render children?.()}

<footer>
	<p>© 2025 Team Civitas</p>
</footer>

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
		view-transition-name: header;
	}

	nav img {
		width: 50px;
		height: 50px;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	footer {
		margin-top: 1rem;

		color: var(--primary-color);
		text-align: center;
		padding: 3rem;
		background-color: var(--background-secondary-color);
	}

	.sociala-medier-manual-link img {
		width: 30px;
		height: 30px;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:root::view-transition-old(root) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		:root::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}

	@media (min-width: 769px) {
		.sociala-medier-navlink {
			display: flex;
		}

		.sociala-medier-manual-link {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.nav-logo-text {
			display: none;
		}

		nav > div {
			max-width: 100%;
			white-space: nowrap;
			font-size: 1rem;
		}

		.sociala-medier-navlink {
			display: none;
		}
	}

	@media (max-width: 480px) {
	}
</style>
