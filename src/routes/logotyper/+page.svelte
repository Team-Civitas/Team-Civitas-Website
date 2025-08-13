<script lang="ts">
	const images: Record<string, string> = import.meta.glob(
		'/src/resources/img/logotypes/**/*.{png,jpg,jpeg,webp}',
		{
			eager: true,
			query: '?url',
			import: 'default'
		}
	);
</script>

{#each Object.values(images) as src}
	<img {src} alt="portfolio" class="mini"/>
{/each}

<style>
	.mini {
		width: 100px;
		height: 100px;
	}
</style>
