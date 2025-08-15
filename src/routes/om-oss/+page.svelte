<script>
	import { logotype } from '$lib/IconManager';
</script>

<div class="header-background">
	<h1 class="header-heading">OM OSS</h1>
</div>

<div class="container">
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
	.header-background {
		height: 100%;

		background-image: url(../../lib/assets/Images/bruce_banner.png);

		background-repeat: repeat-x;
		animation: scroll-bg 50s linear infinite;
	}

	.header-heading {
		height: 500px;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 15rem;
		font-family: 'Archivo Black', sans-serif;

		color: var(--primary-color);
	}

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
