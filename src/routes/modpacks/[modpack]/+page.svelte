<script>
	import bannerImg from '$lib/assets/data/CivitasStories/Civitas Overdrive/overdrive_banner.png';
	import modpackImg from '$lib/assets/data/CivitasStories/Civitas Overdrive/Civitas Overdrive.png';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/state';
	import Box from '$lib/components/Box.svelte';
	console.log(page.params.modpack);
</script>

<Header title="OVERDRIVE" bannersrc={bannerImg} />

<div class="container">
	<Box>
		<div class="modpack-header">
			<img src={modpackImg} alt="" />
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
            <ul>
                <li>Ny och förbättrad grafik</li>
                <li>Fler byggblock och resurser</li>
                <li>Optimerad prestanda</li>
            </ul>
		</div>
	</Box>
</div>

<style>

    body {
        color: var(--text-color);
    }

	.modpack-header {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
        gap: 2rem 2rem;
	}

	.modpack-header img {
		width: 30%;
		height: auto;
	}
</style>
