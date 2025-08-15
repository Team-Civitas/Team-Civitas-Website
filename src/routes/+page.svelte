<script>
	import { logotype } from '$lib/IconManager';
</script>

<div class="header-background">
	<img src={logotype} alt="logo" />
</div>

<div class="container">
	<h1 class="title">TEAM CIVITAS</h1>
	<p class="description">
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

    <h2 class="subtitle">VÅR HISTORIA</h2>
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
	@keyframes scroll-bg {
		from {
			background-position: 0 -250px;
		}
		to {
			background-position: -2480px -250px;
		}
	}

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

	.title {
        font-size: 2rem;
		font-family: 'Archivo Black', sans-serif;
		text-align: left;
		color: var(--primary-color);

        margin-bottom: 1vh;
	}
    
	p.description {
        font-size: 1.5rem; /*Overrides p*/
	}

    p {
		text-align: justify;
		text-align-last: justify;
		color: var(--primary-color);
        
        font-size: 1.25rem;
    }

    .description + h2 {
        margin-top: 12rem;
    }

    .subtitle {
        font-size: 5.5rem;
		font-family: 'Archivo Black', sans-serif;
		text-align: left;
		color: var(--primary-color);

        margin-bottom: 1vh;
    }

</style>
