<script lang="ts">
	import dataManager from '$lib/dataManager';
	import ModpackCard from '$lib/Card.svelte';
	import Grid from '$lib/Grid.svelte';

	let imgPath = '/src/resources/img';

	let data: any[] = [];
	dataManager().then((ret) => {
		data = ret;
	});

	function getImgPath(modpack: any) {
		return `${imgPath}/logotypes/${modpack.modpack.id}/${modpack.modpack.logotype}`;
	}
</script>

<header class="header-content">
	<h1 class="margin-above-title">MODPACKS</h1>
	<p class="margin-beneath-description">Här finns modpacks från hela Civitashistorien!</p>
</header>

<Grid>
	{#each data as modpack}
		<ModpackCard
			name={modpack.modpack.name}
			src={getImgPath(modpack)}
			alt={modpack.modpack.id}
			time={modpack.modpack.time}
		/>
	{/each}
</Grid>
