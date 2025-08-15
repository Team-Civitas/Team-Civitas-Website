<script>
	let { title, src } = $props();
</script>

<div class="header-background">
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

		font-size: 15rem;
		font-family: 'Archivo Black', sans-serif;

		color: var(--primary-color);
	}

	img {
		display: block;
		margin: auto;
		width: 500px;
		height: auto;
	}
</style>
