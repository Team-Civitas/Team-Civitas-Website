<script>
	import Header from '$lib/components/Header.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { active_project, logotype, history, socials, bruce } from '$lib/IconManager';
	import { inView } from '$lib/inView.js';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Timeline from '$lib/components/Timeline.svelte';

	let showDescription = $state(false);

	function handleInView() {
		showDescription = true;
	}
</script>

<Header src={logotype} />

<div class="container">
	<h1 class="heading heading-center" style="font-size: 3rem;">UTFORSKA</h1>

	<div class="landing-page-cards">
		<a class="animate" href="#placeholder" use:inView
			><TitledCard title="Aktuella Projekt" src={active_project} useHover={true} /></a
		>
		<a class="animate" href="#history" use:inView
			><TitledCard title="Historia" src={history} useHover={true} /></a
		>
		<a class="animate" href="#placeholder" use:inView
			><TitledCard title="Sociala Medier" src={socials} useHover={true} /></a
		>
	</div>

	<div class="description-container">
		<h2 class="heading heading-left" id="om_oss">TEAM CIVITAS</h2>

		<div use:inView onenterViewport={handleInView}>
			{#if showDescription}
				<p class="description" in:fly={{ y: 50, duration: 500 }}>
					Team Civitas är en kreativ gemenskap för vänner som gillar att bygga, spela och skapa
					tillsammans. Sedan starten har vi utforskat ett brett spektrum av modpacks och sparat våra
					äventyr i form av bilder och minnen. Vi är inte ett offentligt community – utan ett litet
					team där varje medlem bidrar till att forma vår historia. Från experimentella events till
					återkommande Minecraftservrar, står Team Civitas för engagemang, kreativitet och
					minnesvärda ögonblick.
				</p>
			{/if}
		</div>
	</div>
</div>

<div class="container">
	<h3 class="heading heading-center">TEAMET BAKOM CIVITAS</h3>
	<div>
		<h4 class="subheading subheading-center">GRUNDARE</h4>
		<div class="animate" use:inView>
			<TitledCard
				src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
				title="DanteMC (DanteMinecraft)"
				char_img={true}
				useHover={true}
			/>
		</div>
	</div>
	<div>
		<h5 class="subheading subheading-center">CIVITAS CORE</h5>
		<div class="landing-page-cards">
			<div class="animate" use:inView>
				<TitledCard
					src="https://starlightskins.lunareclipse.studio/render/ultimate/Elf_Oliver/full"
					title="Elf_Oliver"
					char_img={true}
					useHover={true}
				/>
			</div>
			<div class="animate" use:inView>
				<TitledCard
					src="https://starlightskins.lunareclipse.studio/render/ultimate/Lulle2345/full"
					title="Lulle2345"
					char_img={true}
					useHover={true}
				/>
			</div>
			<div class="animate" use:inView>
				<TitledCard
					src="https://starlightskins.lunareclipse.studio/render/ultimate/Zcloak/full"
					title="Zcloak"
					char_img={true}
					useHover={true}
				/>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<h6 class="heading heading-left" id="history">HUR BÖRJADE ALLT?</h6>
	{#if showDescription}
		<p class="description" in:fly={{ y: 50, duration: 500 }}>
			<strong>Team Civitas</strong> grundades av DanteMC (DanteMinecraft) den 10 oktober år 2020 och
			har sedan dess vuxit till en större gemenskap med personer från hela Sverige. Vår resa började
			med att vi spelade på en Minecraft-server vid namnet "Civitascraft" och har sedan dess utvecklats
			till att omfatta en mängd olika spel och projekt. Idag har vi en stark närvaro inom Minecraft,
			där vi främst spelar olika modpacks och skapar egna äventyr. Vårt team är inte bara en samling
			spelare, utan en kreativ gemenskap där vi delar idéer, bygger tillsammans och skapar minnen som
			varar livet ut.
		</p>
	{/if}
</div>

<div class="container">
<Timeline
  items={[
    { title: "Invention of the Telegraph", paragraphs: ["Revolutionized long-distance communication, sending messages across continents in minutes."], date: "1837-05-24" },
    { title: "First Steam Locomotive", paragraphs: ["The 'Rocket' by George Stephenson transformed transportation and trade."], date: "1829-09-15" },
    { title: "Discovery of Electricity", paragraphs: ["Michael Faraday’s experiments with electromagnetism laid the foundation for modern power."], date: "1831-08-29" },
    { title: "Photography Emerges", paragraphs: ["The daguerreotype introduced a new way to capture and preserve moments in time."], date: "1839-01-07" },
    { title: "California Gold Rush", paragraphs: ["Mass migration westward began after gold was found at Sutter’s Mill."], date: "1848-01-24" },
    { title: "Publication of Darwin’s 'Origin of Species'", paragraphs: ["Introduced the theory of evolution through natural selection."], date: "1859-11-24" },
    { title: "Invention of the Telephone", paragraphs: ["Alexander Graham Bell patented the telephone, changing communication forever."], date: "1876-03-10" },
    { title: "Light Bulb Patented", paragraphs: ["Thomas Edison’s practical electric light bulb began illuminating homes and streets."], date: "1879-11-04" },
    { title: "First Powered Flight", paragraphs: ["The Wright brothers successfully flew at Kitty Hawk, marking the dawn of aviation."], date: "1903-12-17" },
    { title: "First Moon Landing", paragraphs: ["Apollo 11 landed on the Moon and Neil Armstrong took mankind’s first step."], date: "1969-07-20" }
  ]}
/>

</div>

<style>
	.landing-page-cards {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 3rem;
	}

	.description-container {
		margin: 2rem 0;
	}

	.description {
		margin-top: 1rem;
		margin-bottom: 3rem;
	}

	/*Tablet*/
	@media (max-width: 768px) {
		.landing-page-cards {
			flex-direction: column;
		}
	}

	/*Phone*/
	@media (max-width: 480px) {
		.landing-page-cards {
			gap: 1em;
		}
	}
</style>
