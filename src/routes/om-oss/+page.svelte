<script>
	import { logotype } from '$lib/IconManager';
</script>

<div class="header-background">
	<h1 class="header-heading">OM OSS</h1>
</div>

<div class="container">
	<h2 class="heading">TEAMET BAKOM CIVITAS</h2>
	<hr>
	<h3 class="subheading">GRUNDARE</h3>

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

	hr + h3 {
		margin-top: 3rem;
	}

</style>
