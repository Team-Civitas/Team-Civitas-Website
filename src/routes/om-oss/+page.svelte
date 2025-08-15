<script>
	import Header from '$lib/components/Header.svelte';
import { logotype } from '$lib/IconManager';
</script>

<Header title="OM OSS"/>

<div>
	<h2 class="heading heading-center">TEAMET BAKOM CIVITAS</h2>
	<hr />
	<h3 class="subheading subheading-center">GRUNDARE</h3>
	<div class="member-container">
		<div class="member-card">
			<img
				src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
				alt="DanteMinecraft - Grundare"
			/>
		</div>
	</div>
</div>

<style>
	.member-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.member-card {
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--background-secondary-color);
		padding: 1rem;
		border-radius: var(--border-radius);

		width: 500px;
		height: 500px;
	}

	.member-card img {
		width: 50%;
		border-radius: var(--border-radius);
	}
</style>
