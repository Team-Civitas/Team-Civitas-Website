<script>
	import { page } from '$app/state';
</script>

<main>
	<header class="header-content">
		<p class="not-found-header">{page.status}</p>
	</header>

	<section>
		<div class="header-content">
			<h1>Woopsies!</h1>
			{#if page.status == 404}
				<p>
					Det verkar som att den här sidan inte finns ännu. Klicka <a class="underlined" href="/"
						>här</a
					> för att gå tillbaka till en mer säker plats!
				</p>
			{:else}
				<p>
					Det verkar som att det skedde en error! Klicka <a class="underlined" href="/">här</a> för att
					gå tillbaka till en mer säker plats!
				</p>
			{/if}
		</div>

		<div class="not-found-karaktärer">
			<img
				id="elf_oliver"
				src="https://starlightskins.lunareclipse.studio/render/cheering/Elf_Oliver/full"
				draggable="false"
				alt="Elf_Oliver-karaktär"
			/>
			<img
				id="danteminecraft"
				src="https://starlightskins.lunareclipse.studio/render/relaxing/DanteMinecraft/full"
				draggable="false"
				alt="DanteMinecraft-karaktär"
			/>
		</div>
	</section>
</main>

<style>
	.not-found-header {
		font-size: 20rem;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
	}

	.not-found-karaktärer {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
        margin-bottom: 5rem;
	}

	.not-found-karaktärer img {
		margin-top: 5vh;
		height: 30vh;
	}
</style>
