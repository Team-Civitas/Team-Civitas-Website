<script>
	import Header from '$lib/components/Header.svelte';
	import Box from '$lib/components/Box.svelte';
	import { page } from '$app/state';
	import { getModpack } from '$lib/assets/data/dataHandler';

	const name = decodeURI(page.params.modpack)
		.split(' ')
		.splice(1)
		.toString()
		.replaceAll(',', '-')
		.toLowerCase();

	const modpack = getModpack(name);

	const bannerImg = modpack.banner; // dynamic path from JSON
	const modpackImg = modpack.image; // dynamic path from JSON

	const frameworks = {
		minecraft: 'https://feedback.minecraft.net/hc/theming_assets/01HZH4GFS6HZFCFWQPVZT51JSB',
		forge: '',
		neoforge: 'https://neoforged.net/img/authors/neoforged.png',
		fabric: '',
		create: 'https://wiki.createmod.net/assets/create-icon-large.webp',
		axiom: 'https://media.forgecdn.net/avatars/thumbnails/875/313/256/256/638297701708807643.png',
		worldedit: 'https://media.forgecdn.net/attachments/16/948/logo.png'
	};
</script>

<Header title={modpack.data.modpack.name} bannersrc={bannerImg} />

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
							{framework} {version ? version : ''}
						</li>
					{/each}
				</ul>

				<hr style="margin: 2rem 0; width:100%" />

				<h1 class="heading">NEDLADDNINGAR</h1>
				<ul>
					{#each modpack.data.downloads.modpacks as download}
						<li>
							<a href={download.url}>
								<img src="/src/lib/assets/Images/download.webp" style="width:30px; height:auto;" alt="Download" />
								<p class="underlined">{`Ladda ner ${download.version}`}</p>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Box>
</div>

<style>
	.container {
		padding-bottom: 1rem;
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
</style>
