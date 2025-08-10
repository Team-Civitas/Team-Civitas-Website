<script lang="ts">
	import { onMount } from 'svelte';
	import ModpackCard from '$lib/Card.svelte';

	const civitasIcon = '/img/logotypes/team-civitas/Team Civitas Sleek.svg';
	const overdriveIcon = '/img/logotypes/overdrive/overdrive_logotype.png';
	const recreatedIcon = '/img/logotypes/re-created/civitas_re-created.png';

	const featuredImageModules = import.meta.glob('/src/img/featured_imgs/*', {
		eager: true,
		import: 'default'
	});

	const featuredImages = Object.values(featuredImageModules) as string[];

	let featuredImage: string | undefined = undefined;

	onMount(() => {
		if (featuredImages.length > 0) {
			const randomIndex = Math.floor(Math.random() * featuredImages.length);
			featuredImage = featuredImages[randomIndex];
		}
	});
</script>

<main>
	<section class="hero">
		{#if featuredImage}
			<img src={featuredImage} alt="Featured background" class="hero-image" draggable="false" />
		{/if}

		<div class="overlay">
			<div class="overlay-content">
				<img src={civitasIcon} alt="Team Civitas logo" class="logo" draggable="false" />
				<h1>Team Civitas</h1>
			</div>
		</div>
	</section>

	<section class="featured-modpacks-section">
		<h2>Utvalda Modpacks</h2>
		<div class="modpack-list">
			<ModpackCard
				name="Civitas: Overdrive"
				src={overdriveIcon}
				alt="Civitas: Overdrive"
				time="2025-06-06 – Pågående"
			/>
			<ModpackCard
				name="Civitas: Re-Created"
				src={recreatedIcon}
				alt="Civitas: Re-Created"
				time="2023-12 – 2024-07"
			/>
		</div>
	</section>
</main>

<style>
	.hero {
		position: relative;
		height: 75vh;
		width: 100vw;
		overflow: hidden;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		user-select: none;
		pointer-events: none;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.overlay-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo {
		width: 250px;
		height: 250px;
	}

	.featured-modpacks-section {
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.modpack-list {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
		justify-content: center;
	}

	.modpack-list :global(.modpack-card) {
		max-width: 300px;
	}
</style>