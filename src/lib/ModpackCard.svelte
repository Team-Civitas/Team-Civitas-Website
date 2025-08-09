<script lang="ts">
	let { name, src, alt, time = '' } = $props();
</script>

<div class="modpack-card">
	<a href="/modpacks/{name}">
		<img {src} {alt} />
		<div class="border-top">
			<h3>{name}</h3>
			<p>{time}</p>
		</div>
	</a>
</div>

<style>
	.modpack-card {
		display: flex;
		flex-direction: column;
		background-color: var(--card-bg);
		border-radius: 20px;
		padding: 5%;
        text-align: center;
	}

	.modpack-card a img {
		width: 100%;
	}

	.border-top {
		border-top: #fff solid 2px;
	}
</style>
