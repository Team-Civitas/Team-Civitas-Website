<script>
	import { getModpacks } from '$lib/assets/data/dataHandler';
	import Header from '$lib/components/Header.svelte';
	import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { extractName, formatIconName } from '$lib/stringFuncs';

	const modpackGroup = getModpacks();
	const groups = Object.entries(modpackGroup).map(([group, modpacks]) => ({
		group,
		modpacks
	}));
</script>

<Header title="MODPACKS" />

<div class="container container-wide">
	{#each groups as { group, modpacks }}
		<h1 class="heading heading-left">{group}</h1>
		<HorizontalScroll>
			{#each modpacks as modpack}
				<a href="/modpacks/{extractName(modpack.name)}">
					<TitledCard src={modpack.image} title={formatIconName(modpack.name)} />
				</a>
			{/each}
		</HorizontalScroll>
	{/each}
</div>