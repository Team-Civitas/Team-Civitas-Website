<script>
	import { page } from '$app/stores';
</script>

<main>
	<header class="header-content">
		<p class="status">{$page.status}</p>
	</header>

	<section>
		<div class="header-content">
			<h1>Woopsies!</h1>
			{#if $page.status === 404}
				<p class="text">
					Det verkar som att den här sidan inte finns ännu. Klicka
					<a class="underlined" href="/">här</a> för att gå tillbaka till en mer säker plats!
				</p>
			{:else}
				<p class="text">
					Ett katastrofalt fel har inträffat. Klicka
					<a class="underlined" href="/">här</a> för att gå tillbaka till en mer säker plats!
				</p>
			{/if}
		</div>
	</section>
</main>

<style>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Archivo Black', sans-serif;
        color: #fff;
        padding: 1rem;
        text-align: center;
    }

    .status {
        font-size: 8rem;
        font-weight: bold;
        color: #ff4d4d;
        text-shadow: 0 0 15px rgba(255, 77, 77, 0.5);
        margin: 0;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        max-width: 500px;
    }

    .text {
        font-family: sans-serif;
    }

    a {
        text-decoration: none;
        color: var(--highlight-color);
        font-weight: bold;
    }

    .header-content {
        animation: fadeInUp 0.5s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>