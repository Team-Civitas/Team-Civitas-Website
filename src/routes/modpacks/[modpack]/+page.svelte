<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';

	interface Modpack {
		name: string;
		description: string;
		logotype: string;
		id: string;
	}

	interface Player {
		username: string;
		image_override?: string;
		creator?: boolean;
	}

	interface InfoItem {
		label: string;
		version?: string;
		image?: string;
	}

	interface DownloadFile {
		filename: string;
		filename_version?: string;
	}

	interface ModpackData {
		modpack: Modpack;
		players: Player[];
		info: InfoItem[];
		download: { modpack: DownloadFile; world: DownloadFile };
		portfolio: string[]; // Keep it for type but will not be used for images now
	}

	let modpackData: ModpackData | null = null;
	let portfolioImages: { url: string; alt: string }[] = [];
	let loading = true;
	let fetchError: string | null = null;

	function getPlayerImage(player: Player): string {
		if (player.image_override) {
			return player.image_override;
		}
		return `https://starlightskins.lunareclipse.studio/render/default/${player.username}/bust`;
	}

	function getInfoItemImage(label: string): string {
		const lowerLabel = label.toLowerCase();
		switch (lowerLabel) {
			case 'forge':
				return '/img/details/forge.webp';
			case 'fabric':
				return 'https://fabricmc.net/assets/logo.png';
			case 'neoforge':
				return 'https://neoforged.net/img/authors/neoforged.png';
			case 'create':
				return 'https://wiki.createmod.net/assets/create-icon-large.webp';
			case 'minecraft':
			default:
				return 'https://feedback.minecraft.net/hc/theming_assets/01HZH4GFS6HZFCFWQPVZT51JSB';
		}
	}

	const allPortfolioImages = import.meta.glob('/src/img/portfolio/*/*.{jpg,jpeg,png,webp}', {
		eager: true
	});

	onMount(async () => {
		try {
			const modpackId = $page.params.modpack;

			const res = await fetch(`/src/data/${modpackId}.json`);
			if (!res.ok) throw new Error(`Modpack data for "${modpackId}" not found`);
			const data = (await res.json()) as ModpackData;

			// Process modpack data as before
			data.modpack.logotype = `/img/logotypes/${modpackId}/${data.modpack.logotype}`;

			if (data.download.modpack.filename !== 'Saknar') {
				(data.download.modpack as any).modpack_download_url =
					`/files/${data.download.modpack.filename}`;
			}
			if (data.download.world.filename !== 'Saknar världsnedladdning') {
				(data.download.world as any).world_download_url = `/files/${data.download.world.filename}`;
			}

			data.info = data.info.map((item) => ({
				...item,
				image: getInfoItemImage(item.label)
			}));

			modpackData = data;

			// Fetch portfolio images count from your API endpoint
			const portfolioRes = await fetch('/api/json-info');
			if (!portfolioRes.ok) throw new Error('Failed to fetch portfolio images info');
			const portfolioData = await portfolioRes.json();

			// portfolioData might have folder keys with counts
			// We find the count for this modpack portfolio folder: e.g. 'portfolio/<modpackId>'
			const portfolioKey = `portfolio/${modpackId}`;

			const count = portfolioData[portfolioKey] || 0;

			portfolioImages = [];
			for (let i = 1; i <= count; i++) {
				portfolioImages.push({
					url: encodeURI(`/img/portfolio/${modpackId}/${modpackId} (${i}).webp`),
					alt: `${modpackId} (${i})`
				});
			}
		} catch (err) {
			fetchError = (err as Error).message;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Laddar...</p>
{:else if fetchError}
	{error(404, fetchError)}
{:else if modpackData}
	<div>
		<header class="header-content">
			<img src={modpackData.modpack.logotype} alt={`${modpackData.modpack.name}-logotyp`} />
			<h1 class="margin-above-title">{modpackData.modpack.name}</h1>
			<p class="margin-beneath-description">{@html modpackData.modpack.description}</p>
		</header>
		<section>
			<div class="center-cards">
				<div class="ind-modpack-listor">
					<div class="card">
						<h3 class="text-align-left">Spelare:</h3>
						<ul class="card-lista">
							{#each modpackData.players as player}
								<li>
									<img src={getPlayerImage(player)} alt="Spelare" />
									<a href={`https://namemc.com/profile/${player.username}`}>
										<p id="spelare">
											{player.username}{#if player.creator}
												💎
											{/if}
										</p>
									</a>
								</li>
							{/each}
							<li><br />💎-Symbolen visar vem/vilka som har skapat och satt ihop modpacket.</li>
						</ul>
					</div>
					<div class="card">
						<h3 class="text-align-left">Info:</h3>
						<ul class="card-lista">
							{#each modpackData.info as item}
								<li>
									<img src={item.image} alt={item.label} />
									<p>{item.label} {item.version || ''}</p>
								</li>
							{/each}
						</ul>
					</div>
					<div class="card">
						<div class="text-align-left">
							<h3>Modpack:</h3>
							<div class="display-flex-row">
								<img id="download-symbol" src="/img/download.webp" alt="Ladda ner" />
								{#if modpackData.download.modpack.filename === 'Saknar'}
									<p>{modpackData.download.modpack.filename}</p>
								{:else}
									<p>
										<a
											id="file-download"
											href={(modpackData.download.modpack as any).modpack_download_url}
											download>{modpackData.download.modpack.filename}</a
										>
									</p>
								{/if}
							</div>
							<h3>Världar:</h3>
							<div class="display-flex-row">
								<img id="download-symbol" src="/img/download.webp" alt="Ladda ner" />
								{#if modpackData.download.world.filename === 'Saknar världsnedladdning'}
									<p>{modpackData.download.world.filename}</p>
								{:else}
									<p>
										<a
											id="file-download"
											href={(modpackData.download.world as any).world_download_url}
											download>{modpackData.download.world.filename}</a
										>
									</p>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="portfolio">
			<h1 class="header-content">Portfolio</h1>
			<div class="portfolio-grid" id="portfolio-bilder">
				{#each portfolioImages as image}
					<img src={image.url} alt={image.alt} />
				{/each}
			</div>
		</section>
	</div>
{/if}

<style>
	.center-cards {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card {
		display: flex;
		flex-direction: column;
		background-color: var(--card-bg);
		border-radius: 20px;
		padding: 5%;
	}

	.card:hover {
		background-color: var(--card-bg-hover);
		transition: ease-in-out 0.15s;
	}

	.ind-modpack-listor {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 30px;
		max-width: 1200px;
		text-align: center;
		margin: 0 60px;
		margin-bottom: 60px;
	}

	.ind-modpack-listor .card {
		background-color: var(--card-bg) !important;
	}

	.card-lista li {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0.5vh 0;
	}

	.card-lista img {
		width: 30px;
	}

	#download-symbol {
		align-self: center;
		width: 30px;
		height: 30px;
	}

	.portfolio-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 60px;
		max-width: 80%;
		margin: auto;
		margin-bottom: 60px;
	}

	.portfolio-grid img {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: 10px;
		transition: ease-in-out 0.15s;
	}

	.portfolio-grid img:hover {
		filter: brightness(1.15);
		transform: scale(1.025);
		transition: ease-in-out 0.15s;
	}

	@media (min-width: 768px) {
		.portfolio-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1025px) {
		.ind-modpack-listor {
			grid-template-columns: repeat(3, 1fr);
		}
		.portfolio-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
