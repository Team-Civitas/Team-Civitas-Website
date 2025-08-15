<script>
	import Header from '$lib/components/Header.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { logotype } from '$lib/IconManager';
</script>

<Header title="OM OSS" />

<div>
	<h2 class="heading heading-center">TEAMET BAKOM CIVITAS</h2>
	<div>
		<h3 class="subheading subheading-center">GRUNDARE</h3>
		<TitledCard
			src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
			title="DanteMC (DanteMinecraft)"
		></TitledCard>
	</div>
	<div>
		<h4 class="subheading subheading-center">CIVITAS CORE</h4>
		<div class="civitas-core">
			<TitledCard
				src="https://starlightskins.lunareclipse.studio/render/ultimate/Elf_Oliver/full"
				title="Elf_Oliver"
			></TitledCard>
			<TitledCard
				src="https://starlightskins.lunareclipse.studio/render/ultimate/Lulle2345/full"
				title="Lulle2345"
			></TitledCard>
			<TitledCard
				src="https://starlightskins.lunareclipse.studio/render/ultimate/Zcloak/full"
				title="Zcloak"
			></TitledCard>
		</div>
	</div>
</div>

<style>
	h2 {
		padding: 70px;
	}

	.subheading {
		padding: 20px;
	}

	.civitas-core {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
</style>
