<script>
	import Header from '$lib/components/Header.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';

	import {
		active_project,
		logotype,
		history,
		socials,
		bruce,
		civitas_crystal,
		civitas_legacy_crystal,
		civitas_create,
		civitas_arcanum,
		civitas_recreated,
		civitas_sleek,
		civitas_overdrive,
		civitas_spellbound,

		tba_icon


	} from '$lib/IconManager';

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
		<a class="animate" href="/aktuella-projekt" use:inView
			><TitledCard title="Aktuella Projekt" src={active_project} useHover={true} /></a
		>
		<a class="animate" href="#history" use:inView
			><TitledCard title="Historia" src={history} useHover={true} /></a
		>
		<a class="animate" href="/social-media" use:inView
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
	<h2 class="heading heading-center">TEAMET BAKOM CIVITAS</h2>
	<div>
		<h3 class="subheading subheading-center">GRUNDARE</h3>
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
		<h3 class="subheading subheading-center">CIVITAS CORE</h3>
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
	<h2 class="heading heading-left" id="history">HUR BÖRJADE ALLT?</h2>
	<div use:inView onenterViewport={handleInView}>
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
</div>

<div class="container">
	<h2 class="heading heading-center" id="history">TIDSLINJE GENOM HISTORIEN</h2>
	<Timeline
		items={[
			{
				title: 'TEAM CIVITAS SKAPADES',
				paragraphs: [
					'Team Civitas grundades den 10 oktober år 2020 i form av en Minecraftserver med namnet Civitascraft.'
				],
				date: '2020-10-10',
				image: civitas_legacy_crystal
			},
			{
				title: 'CIVITASCRAFT',
				paragraphs: [
					'Vanillaservrar hostades mellan år 2020 och 2022 med säsongsupplägg likt Hermitcraft.'
				],
				date: '2020 till 2022',
				image: civitas_crystal
			},
			{
				title: 'CIVITAS: CREATE',
				paragraphs: [
					'I slutet av januari 2023 startade den första modpackservern för Team Civitas i modern tid efter att Pre-Civitas modpacket Vaults & Space avslutades.'
				],
				date: '2023-01-19',
				image: civitas_create
			},
			{
				title: 'DEN FÖRSTA DISCORDSERVERN',
				paragraphs: [
					'I samband med att modpacket Civitas: Create precis släppts skapades den första Discordservern för Team Civitas.'
				],
				date: '2023-01-23',
				image: civitas_crystal
			},
			{
				title: "THE CIVITAS STORIES",
				paragraphs: ['I slutet av maj 2023 publicerades det första modpacket i serien "The Civitas Stories". Modpacket hette "Civitas: Arcanum" och det var teamets andra i modern tid.'],
				date: '2023-05-29',
				image: civitas_arcanum
			},
			{
				title: 'DET MEST AKTIVA MODPACKET',
				paragraphs: [
					'Den 14 december 2023 släpptes modpacket "Civitas: Re-Created" vilket är det populäraste i Team Civitas historia.'
				],
				date: '2023-12-14',
				image: civitas_recreated
			},
			{
				title: 'NY LOGOTYP',
				paragraphs: [
					'Efter 4 år av en och samma logotyp var det dags att fräscha upp Team Civitas. Den nya logotypen presenterades i april 2024 och började användas strax efter.'
				],
				date: '2024-04-06',
				image: civitas_sleek
			},
			{
				title: 'DEN ANDRA DISCORDSERVERN',
				paragraphs: [
					'Då modpacket Civitas: Re-Created mötte hinder i samarbetet skapades en ny Discordserver med tydligare regler och struktur. Denna server används än idag.'
				],
				date: '2024-07-03',
				image: civitas_crystal
			},
			{
				title: 'EN OFFICIELL HEMSIDA',
				paragraphs: ['Den 13 april 2025 lanserades den officiella hemsidan för Team Civitas. På hemsidan finns samlingar screenshots och minnen från alla tidigare modpacks.'],
				date: '2025-04-13',
				image: civitas_sleek
			},
			{
				title: 'EN BÄTTRE HEMSIDA',
				paragraphs: ['Ca 1 månad efter att hemsidan lanserades släpptes en stor uppdaterad version. Den nya sidan inkluderade en startsida, ett navigeringsfält, och möjlighet att ladda ner alla logotyper i Civitashistorien.'],
				date: '2025-05-15',
				image: civitas_sleek
			},
			{
				title: 'SERVERDATOR & CIVITAS: OVERDRIVE',
				paragraphs: ['I samband med att modpacket Civitas: Overdrive utvecklades, införskaffades en dedikerad serverdator för att hantera de ökade kraven.'],
				date: '2025-05-18',
				image: civitas_overdrive
			},
			{
				title: 'PROJECT – BEYOND CREATE',
				paragraphs: ['Den 24 augusti 2025 släpptes trailern inför vad som skulle bli Team Civitas största förändring hittills.'],
				date: '2025-08-24',
				image: active_project
			},
			{
				title: 'EN NY ERA',
				paragraphs: ['Knappt en vecka efter att trailern inför "Projekt Beyond Create" släpptes, publicerades information om flera förändringar. Nya modpacks, en ny hemsida, en korrigerad logotyp, och mycket mer presenterades i den officiella Discordservern.'],
				date: '2025-08-29',
				image: logotype
			},
			{
				title: 'CIVITAS: SPELLBOUND',
				paragraphs: ['Den 5 september släpptes det första modpacket i serien "Civitas Originals". Detta är en serie som kommer att spelas parallellt med "The Civitas Stories" i kortare perioder än huvudmodpacken.'],
				date: '2025-09-05',
				image: civitas_spellbound
			},
			{
				title: 'FRAMTID',
				paragraphs: ['Team Civitas byggs vidare successivt, och nya idéer och projekt utforskas ständigt. Håll utkik, för plötsligt kan något nytt dyka upp här!'],
				date: '???',
				image: tba_icon
			}
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
