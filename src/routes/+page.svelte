<script>
	import Header from '$lib/components/Header.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { logotype } from '$lib/IconManager';
	import { inView } from '$lib/inView.js';
</script>

<Header src={logotype} />

<div class="container">
	<h1 class="heading heading-center" style="font-size: 3rem;">UTFORSKA</h1>

	<div class="landing-page-cards">
		<a class="animate" href="#placeholder" use:inView
			><TitledCard
				title="Aktuella Projekt"
				src={logotype}
				useHover={true}
			/></a
		>
		<a class="animate" href="#placeholder" use:inView
			><TitledCard
				title="Höjdpunkter"
				src={logotype}
				useHover={true}
			/></a
		>
		<a class="animate" href="#placeholder" use:inView
			><TitledCard
				title="Sociala Medier"
				src={logotype}
				useHover={true}
			/></a
		>
	</div>

	<h2 class="heading heading-left">TEAM CIVITAS</h2>

	<p class="description">
		Team Civitas är en kreativ gemenskap för vänner som gillar att bygga, spela och skapa
		tillsammans. Sedan starten har vi utforskat ett brett spektrum av modpacks och sparat våra
		äventyr i form av bilder och minnen. Vi är inte ett offentligt community – utan ett litet team
		där varje medlem bidrar till att forma vår historia. Från experimentella events till
		återkommande Minecraftservrar, står Team Civitas för engagemang, kreativitet och minnesvärda
		ögonblick.
	</p>
</div>

<style>
	.landing-page-cards {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 3rem;
	}
</style>
