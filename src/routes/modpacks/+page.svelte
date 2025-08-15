<script>
	import Header from '$lib/components/Header.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { logotype } from '$lib/IconManager';
</script>

<Header title="MODPACKS" />

<div class="container">
	<h1 class="heading heading-left">THE CIVITAS STORIES</h1>
	<div class="horizontal-scroll-container">
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="DanteMC (DanteMinecraft)"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="DanteMC (DanteMinecraft)"
		></TitledCard>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="DanteMC (DanteMinecraft)"
		></TitledCard>
		
	</div>
</div>

<style>
	.horizontal-scroll-container {
		display: flex;
		overflow-x: auto;
	}

</style>
