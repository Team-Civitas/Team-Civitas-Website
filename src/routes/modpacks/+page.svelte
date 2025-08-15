<script>
	import Header from '$lib/components/Header.svelte';
	import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { extractName, formatIconName } from '$lib/stringFuncs';

	// Civitas Stories
	const civitasStoriesImport = import.meta.glob(
		'$lib/assets/Images/ModpackIcons/CivitasStories/*',
		{
			eager: true,
			query: '?url',
			import: 'default'
		}
	);
	let civitasIcons = Object.values(civitasStoriesImport);

	// Originals
	const originalsImport = import.meta.glob('$lib/assets/Images/ModpackIcons/OriginalModpacks/*', {
		eager: true,
		query: '?url',
		import: 'default'
	});
	let originalIcons = Object.values(originalsImport);

	console.log(civitasIcons, originalIcons);
</script>

<Header title="MODPACKS" />

<div class="container-wide">
	<h1 class="heading heading-left">THE CIVITAS STORIES</h1>
	<HorizontalScroll>
		{#each civitasIcons as icon}
			<a href="/modpacks/{extractName(icon)}">
				<TitledCard src={icon} title={formatIconName(extractName(icon))} />
			</a>
		{/each}
	</HorizontalScroll>

	<h1 class="heading heading-left">CIVITAS ORIGINALS</h1>
	<HorizontalScroll>
		{#each originalIcons as icon}
			<a href="/modpacks/{extractName(icon)}">
				<TitledCard src={icon} title={formatIconName(extractName(icon))} />
			</a>
		{/each}
	</HorizontalScroll>
</div>
