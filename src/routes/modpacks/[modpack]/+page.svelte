<script>
	import bannerImg from '$lib/assets/data/CivitasStories/Civitas Overdrive/overdrive_banner.png';
	import modpackImg from '$lib/assets/data/CivitasStories/Civitas Overdrive/Civitas Overdrive.png';
	import downloadImg from '$lib/assets/Images/download.webp';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/state';
	import Box from '$lib/components/Box.svelte';
	console.log(page.params.modpack);
</script>

<Header title="OVERDRIVE" bannersrc={bannerImg} />

<div class="container">
	<Box>
		<div class="modpack-header" style="align-items: center;">
			<img id="modpack-image" src={modpackImg} alt="" />
			<div>
				<h1 class="heading heading-left">CIVITAS: OVERDRIVE</h1>
				<p>
					Civitas: Overdrive är det första fullskaliga och officiella Civitas-modpacket byggt med
					NeoForge och Minecraft 1.21.1. Det är även det första i serien som använder Create 6.0.0+
					och Axiom (tillsammans med WorldEdit). Även om ett mindre testmodpack – Civitas: Synergy –
					föregick Overdrive, markerar det här modpacket ett nytt kliv i seriens versionsutveckling.
					Overdrive bygger vidare på Synergy med nya moddar, genomtänka justeringar, samt
					balanserade prestandaförbättringar; allt detta samtidigt som det också går att
					klassificera som en förbättrad och utvecklad version av favoriten Civitas: Re-Created.
				</p>
			</div>
		</div>
	</Box>
	<Box>
		<div class="modpack-header">
			<div style="width: 300px;">
				<h1 class="heading">SPELARE</h1>
				<ul>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/bust"
							alt="DanteMC"
						/>DanteMinecraft
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/Elf_Oliver/bust"
							alt="Elf_Oliver"
						/>Elf_Oliver
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/Lulle2345/bust"
							alt="Lulle2345"
						/>Lulle2345
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/Zcloak/bust"
							alt="Zcloak"
						/>Zcloak
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/Pickyben/bust"
							alt="Pickyben"
						/>Pickyben
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/SkogisAB/bust"
							alt="SkogisAB"
						/>SkogisAB
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/RealFemboySlayer/bust"
							alt="RealFemboySlayer"
						/>RealFemboySlayer
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/Isac04_/bust"
							alt="Isac04_"
						/>Isac04_
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/TwitchErik71/bust"
							alt="TwitchErik71"
						/>TwitchErik71
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/NoobElis/bust"
							alt="NoobElis"
						/>NoobElis
					</li>
					<li>
						<img
							src="https://starlightskins.lunareclipse.studio/render/ultimate/MelvinMinecraft1/bust"
							alt="MelvinMinecraft1"
						/>MelvinMinecraft1
					</li>
				</ul>
			</div>
			<div>
				<h1 class="heading">INFORMATION OM MODPACK</h1>
				<ul>
					<li>
						<img src="https://neoforged.net/img/authors/neoforged.png" alt="NeoForge" />NeoForge
					</li>
					<li>
						<img
							src="https://feedback.minecraft.net/hc/theming_assets/01HZH4GFS6HZFCFWQPVZT51JSB"
							alt="Minecraft"
						/>Minecraft 1.21.1
					</li>
					<li>
						<img
							src="https://wiki.createmod.net/assets/create-icon-large.webp"
							alt="Create"
						/>Create 6.0.0+
					</li>
					<li>
						<img
							src="https://media.forgecdn.net/avatars/thumbnails/875/313/256/256/638297701708807643.png"
							alt="Axiom"
						/>Axiom
					</li>
					<li>
						<img
							src="https://media.forgecdn.net/attachments/16/948/logo.png"
							alt="WorldEdit"
						/>WorldEdit
					</li>
				</ul>
				<hr style="margin: 2rem 0; width:100%" />
				<h1 class="heading">NEDLADDNINGAR</h1>
				<ul>
					<li>
						<a href="#"
							><img src={downloadImg} style="width:30px; height:auto;" alt="Ladda ner NeoForge" />
							<p class="underlined">Ladda ner NeoForge</p></a
						>
					</li>
					<li>
						<a href="#"
							><img
								src={downloadImg}
								style="width:30px; height:auto;"
								alt="Ladda ner Create 6.0.0+"
							/>
							<p class="underlined">Ladda ner Create 6.0.0+</p></a
						>
					</li>
					<li>
						<a href="#"
							><img src={downloadImg} style="width:30px; height:auto;" alt="Ladda ner Axiom" />
							<p class="underlined">Ladda ner Axiom</p></a
						>
					</li>
					<li>
						<a href="#"
							><img src={downloadImg} style="width:30px; height:auto;" alt="Ladda ner WorldEdit" />
							<p class="underlined">Ladda ner WorldEdit</p></a
						>
					</li>
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
