<script>
	let { name, src, alt, href = undefined, time = '' } = $props();
</script>

{#if href}
	<div class="modpack-card href-link">
		<a {href}>
			<img {src} {alt} />
			<div class="border-top">
				<h3>{name}</h3>
				<p>{time}</p>
			</div>
		</a>
	</div>
{:else}
	<div class="modpack-card">
		<div class="card-content">
			<img {src} {alt} />
			<div class="border-top">
				<h3>{name}</h3>
				<p>{time}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.href-link:hover {
		background-color: var(--card-bg-hover);
		transition: ease-in-out 0.15s;
	}

	.modpack-card {
		display: flex;
		flex-direction: column;
		background-color: var(--card-bg);
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
	}

	.modpack-card a img,
	.modpack-card .card-content img {
		width: 100%;
	}

	.border-top {
		border-top: #fff solid 2px;
	}
</style>
