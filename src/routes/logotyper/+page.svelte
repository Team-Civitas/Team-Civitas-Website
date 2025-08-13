<script lang="ts">
	// Map of absolute file path => URL
	const images = import.meta.glob('../../../static$img/logotypes/**/*.{png,jpg,jpeg,webp}', {
		eager: true,
		query: '?url',
		import: 'default'
	}) as Record<string, string>;

	// Create grouped structure: { folderName: [urls...] }
	const grouped: Record<string, string[]> = {};

	for (const [path, url] of Object.entries(images)) {
		// Extract folder name after `$img/logotypes/`
		const match = path.match(/\$img\/logotypes\/([^/]+)\//);
		const folder = match ? match[1] : '';

		if (!grouped[folder]) grouped[folder] = [];
		grouped[folder].push(url);
	}

	// Sort each folder's images alphabetically
	for (const folder of Object.keys(grouped)) {
		grouped[folder].sort();
	}

	// Optional: sort folders alphabetically too
	const folders = Object.keys(grouped).sort();
</script>

{#each folders as folder}
	<h2>{folder || 'root'}</h2>
	<div>
		{#each grouped[folder] as src}
			<img src={src} alt="portfolio" />
		{/each}
	</div>
{/each}
