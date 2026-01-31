<script>
	import Header from '$lib/components/Header.svelte';
	import MapList from '$lib/components/MapList.svelte';
	import { logotype, civitas_overdrive, civitas_spellbound } from '$lib/IconManager';
</script>

<Header title="AKTUELLA PROJEKT" />

<div class="container">
	<h1 class="heading heading-center" style="font-size: 2.75rem;">NUVARANDE PROJEKT</h1>
	<div style="margin-bottom: 3rem;">
		<MapList
			map_img={civitas_spellbound}
			map_heading="CIVITAS: SPELLBOUND"
			map_description="Efter att drakarna flytt från sina hem så har portalerna till End och Nether stängts för gott. Civitas: Spellbound är det första modpacket som inte längre har tillgång till dessa dimensioner, och istället fokuserar på att utforska nya magiska världar och varelser."
			map_link="/modpacks/Civitas%20Spellbound"
			useHover={true}
		></MapList>
		<MapList
			map_img={civitas_overdrive}
			map_heading="CIVITAS: OVERDRIVE"
			map_description="Civitas: Overdrive är det första fullskaliga och officiella Civitas-modpacket byggt med NeoForge och Minecraft 1.21.1. Det är även det första i serien som använder Create 6.0.0+ och Axiom (tillsammans med WorldEdit)."
			map_link="/modpacks/Civitas%20Overdrive"
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
