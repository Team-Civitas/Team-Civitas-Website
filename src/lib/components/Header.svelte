<script>
	import bannerImg from '../../lib/assets/Images/bruce_banner.png';
	let { title, src, bannersrc = bannerImg } = $props();
</script>

<div class="header-background" style="background-image: url({bannersrc});">
	{#if title}
		<h1 class="header-heading">{title}</h1>
	{/if}
	{#if src}
		<img {src} alt="logo" />
	{/if}
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

		white-space: nowrap;
		font-size: 8rem;
		font-family: 'Archivo Black', sans-serif;

		color: var(--primary-color);
	}

	img {
		display: block;
		margin: auto;
		width: 500px;
		height: auto;
	}

	@media (max-width: 768px) {
		img {
			padding: 2.5rem 0;
			width: 300px;
		}

		.header-heading {
			font-size: 3.5rem;
		}
	}

	@media (max-width: 480px) {
		img {
			padding: 2.5rem 0;
			width: 250px;
		}

		.header-heading {
			font-size: 2.5rem;
			text-wrap: wrap;
			text-align: center;
			height: 330px;
		}
	}
</style>
