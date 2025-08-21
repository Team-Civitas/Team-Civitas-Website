<script>
	import Header from '$lib/components/Header.svelte';
	import MapList from '$lib/components/MapList.svelte';
	import { logotype, blocked_in, civitas_punch } from '$lib/IconManager';
</script>

<Header title="SPELKARTOR" />

<div class="container">
	<h1 class="heading heading-center" style="font-size: 2.75rem;">VÅRA KARTOR</h1>
	<div style="margin-bottom: 3rem;">
		<MapList
			map_img={blocked_in}
			map_heading="BLOCKED IN COMBAT: REMASTERED"
			map_description="Blocked in Combat: Remastered är en nyskapad uppdatering av Minecraft-minispelet Blocked in Combat, ursprungligen skapat av PingiPuck med team. Denna version är gjord för Minecraft 1.20.4 och släpptes i slutet av 2023. Kartan är skapad av DanteMC och SkogisAB."
			map_link="https://www.curseforge.com/minecraft/worlds/blocked-in-combat-remastered"
			useHover={true}
		></MapList>
		<MapList
			map_img={civitas_punch}
			map_heading="CIVITAS PUNCH"
			map_description="Civitas Punch är en nyskapad uppdatering av Minecraft-minispelet Makers Punch II, ursprungligen skapat av MineMakers. Denna version är gjord för Minecraft 1.21.8 och har ännu inte släppts för nedladdning. Kartan är skapad av DanteMC och Elf_Oliver."
			map_link="https://www.curseforge.com/minecraft/worlds/civitas-punch"
			useHover={true}
		></MapList>
	</div>
</div>

<style>
	.hover-enabled:hover {
		transform: scale(1.05);
		transition: transform 0.3s cubic-bezier(0.4, 2, 0.6, 1);
		box-shadow: 0 0 6px 8px #00000027;
	}
</style>
