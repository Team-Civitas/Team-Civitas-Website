<script>
	import Header from '$lib/components/Header.svelte';
	import Box from '$lib/components/Box.svelte';
	import { page } from '$app/state';
	import { getModpack } from '$lib/assets/data/dataHandler';
	import { capitalize } from '$lib/stringFuncs';
	import {
		minecraft_logo,
		fabric_logo,
		forge_logo,
		modrinth_logo,
		neoforge_logo,
		download_icon,
		create_logo,
		create_old_logo
	} from '$lib/IconManager';

	const name = decodeURI(page.params.modpack)
		.split(' ')
		.splice(1)
		.toString()
		.replaceAll(',', '-')
		.toLowerCase();

	const modpack = getModpack(name);
	console.log(modpack);

	const bannerImg = modpack.banner;
	const modpackImg = modpack.image;

	const frameworks = {
		minecraft: minecraft_logo,
		forge: forge_logo,
		neoforge: neoforge_logo,
		fabric: fabric_logo,
		create_old: create_old_logo,
		create: create_logo
	};

	// Image viewer
	let activeImage = null;
	let visibleCount = 6;

	function openImage(src) {
		activeImage = src;
	}

	function closeImage() {
		activeImage = null;
	}

	function showMore() {
		visibleCount += 45;
	}
</script>

<Header
	title={modpack.data.modpack.name.replace(/^Civitas:\s*/, '').toUpperCase()}
	bannersrc={bannerImg}
/>

<div class="container">
	<Box>
		<div class="modpack-header" style="align-items: center;">
			<img id="modpack-image" src={modpackImg} alt={modpack.data.modpack.name} />
			<div>
				<h1 class="heading heading-left">{modpack.data.modpack.name}</h1>
				<p>{modpack.data.modpack.description}</p>
			</div>
		</div>
	</Box>

	<Box>
		<div class="modpack-header">
			<div style="width: 300px;">
				<h1 class="heading">SPELARE</h1>
				<ul>
					{#each modpack.data.players as player}
						<li>
							<img
								src={`https://starlightskins.lunareclipse.studio/render/ultimate/${player.username}/bust`}
								alt={player.username}
							/>
							{player.username}
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h1 class="heading">INFORMATION OM MODPACK</h1>
				<ul>
					{#each Object.entries(modpack.data.modpack.versions) as [framework, version]}
						<li>
							<img src={frameworks[framework]} alt={framework} />
							{capitalize(framework).replaceAll('_old', ' ')}
							{version ? version : ''}
						</li>
					{/each}
				</ul>

				<hr style="margin: 2rem 0; width:100%" />

				<h1 class="heading">NEDLADDNINGAR</h1>
				<ul>
					{#each modpack.data.downloads.modpacks as download}
						<li>
							<a href={download.url}>
								<img src={download_icon} style="width:30px; height:auto;" alt="Download" />
								<p class="underlined">{`Ladda ner ${download.version}`}</p>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Box>
	<div class="portfolio">
		{#each modpack.portfolio.slice(0, visibleCount) as src}
			<button class="portfolio-item" on:click={() => openImage(src)}>
				<img {src} alt="Portfolio-bild" />
			</button>
		{/each}
	</div>

	{#if visibleCount < modpack.portfolio.length}
		<div class="load-more">
			<button on:click={showMore}>Ladda in fler bilder</button>
		</div>
	{/if}

	{#if activeImage}
		<div
			class="img-popup-overlay"
			role="button"
			tabindex="0"
			aria-label="Stäng bild"
			on:click={closeImage}
			on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') && closeImage()}
		>
			<img src={activeImage} alt="Portfoliobild" on:click|stopPropagation />
		</div>
	{/if}
</div>

<style>

	.load-more {
		display: flex;
		justify-content: center;
		margin-top: 1.5rem;
	}

	.load-more button {
		padding: 1rem 2rem;
		border: none;
		border-radius: var(--border-radius);

		background: var(--background-secondary-color);
		color: white;

		font-size: 1.25rem;
		cursor: pointer;
		
		transition: background-color 0.15s ease;
	}

	.load-more button:hover {
		background: var(--highlight-color);
		transition: background-color 0.15s ease;
	}

	.modpack-header {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		margin-bottom: 3rem;
	}

	#modpack-image {
		width: 300px;
		height: auto;

		margin-right: 1rem;
	}

	li {
		list-style: none;
		color: var(--primary-color);
		display: flex;
		align-items: center;
		font-size: 1.2rem;
	}

	p {
		font-size: 1.2rem;
	}

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--primary-color);
	}

	ul > li > img,
	ul > li > a > img {
		width: 50px;
		height: auto;
		margin: 0.25rem;
	}

	.img-popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.img-popup-overlay img {
		max-width: 90%;
		max-height: 90%;
		border-radius: var(--border-radius);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}

	.portfolio {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
	}

	button.portfolio-item {
		all: unset;
		cursor: pointer;
		display: block;
		width: 100%;

		transition: transform 0.15s ease;
	}

	button.portfolio-item:hover {
		transform: scale(1.05);
		transition: transform 0.15s ease;
	}

	button.portfolio-item img {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: var(--border-radius);
	}
</style>
