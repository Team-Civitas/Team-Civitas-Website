<script>
	import Header from '$lib/components/Header.svelte';
	import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { logotype } from '$lib/IconManager';

	const iconImports = import.meta.glob("$lib/assets/Images/ModpackIcons/**/*", { eager: true, as: "url" });
	let icons = Object.values(iconImports);
</script>

<Header title="MODPACKS"/>

<div class="container-wide">
	<h1 class="heading heading-left">THE CIVITAS STORIES</h1>
	<HorizontalScroll>
		{#each icons as icon}
			<TitledCard 
				src={icon}
				title="TOOO"
			/>
		{/each}
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Overdrive"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Synergy"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Create Horizons"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Endurance"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Re-Created"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Create Revolution"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Arcanum"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="Civitas: Create"
		></TitledCard>
		
	</HorizontalScroll>
</div>

<style>
</style>
