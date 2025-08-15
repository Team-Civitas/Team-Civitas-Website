<script>
	import { logotype } from '$lib/IconManager';
</script>

<h1>Välkommen till Team Civitas</h1>

<img src={logotype} alt="logo" />

<p>Välkommen till Team Civitas</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

	h1 {
		font-family: 'Archivo Black', sans-serif;
		text-align: center;
		color: white;
	}

	img {
		display: block;
        margin: auto;
		width: 500px;
		height: auto;
	}

	.header-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
</style>
