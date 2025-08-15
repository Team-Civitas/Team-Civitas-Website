<script>
	import { logotype } from '$lib/IconManager';
</script>

<div class="header-background">
	<img src={logotype} alt="logo" />
</div>

<div class="container">
	<h1 class="heading">TEAM CIVITAS</h1>
	<p class="description">
		Team Civitas är en kreativ gemenskap för vänner som gillar att bygga, spela och skapa
		tillsammans. Sedan starten har vi utforskat ett brett spektrum av modpacks och sparat våra
		äventyr i form av bilder och minnen. Vi är inte ett offentligt community – utan ett litet team
		där varje medlem bidrar till att forma vår historia. Från experimentella events till
		återkommande Minecraftservrar, står Team Civitas för engagemang, kreativitet och minnesvärda
		ögonblick.
	</p>

	<h2 class="heading">VÅR HISTORIA</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a felis non odio finibus tempor a at
		massa. Donec massa urna, euismod ac ipsum quis, feugiat lobortis sem. Suspendisse eu ante ante.
		Etiam imperdiet, nibh vel commodo euismod, est lorem aliquam eros, in volutpat justo eros ac
		eros. Aliquam dignissim sapien dolor, vitae lacinia ligula mattis consequat. In et egestas quam,
		in pellentesque risus. Donec at pulvinar lorem. Sed eleifend ultrices enim. Donec scelerisque
		dolor tortor, dignissim auctor sem pretium sed. Morbi dapibus mi id orci volutpat gravida.
		Mauris vel blandit velit. Quisque mollis vel felis vel egestas. Vestibulum eleifend purus sem,
		non accumsan quam dignissim feugiat. Donec euismod ac ipsum quis at pulvinar lorem. Sed eleifend
		ultrices enim.
	</p>
</div>

<style>

	.header-background {
		height: 100%;

		background-image: url(../lib/assets/Images/bruce_banner.png);

		background-repeat: repeat-x;
		animation: scroll-bg 50s linear infinite;
	}

	img {
		display: block;
		margin: auto;
		width: 500px;
		height: auto;
	}

	p.description {
		font-size: 1.5rem; /*Overrides p*/
	}

	p.justified {
		text-align: justify;
		text-align-last: justify;
		color: var(--primary-color);

		font-size: 1.25rem;
	}

	.description + h2 {
		margin-top: 12rem;
	}
</style>
