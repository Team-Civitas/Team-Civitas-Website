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
		<a class="animate" href="https://awards.teamcivitas.net" target="_blank" use:inView
			><TitledCard title="Civitas Awards" src={active_project} useHover={true} /></a
		>
		<a class="animate" href="https://wiki.teamcivitas.net" target="_blank" use:inView
			><TitledCard title="Civitas Wiki" src={history} useHover={true} /></a
		>
		<a class="animate" href="/social-media" target="_blank" use:inView
			><TitledCard title="Sociala Medier" src={socials} useHover={true} /></a
		>
	</div>

	<div class="description-container">
		<h2 class="heading heading-left" id="om_oss">TEAM CIVITAS</h2>

		<div use:inView onenterViewport={handleInView}>
			{#if showDescription}
				<p class="description" in:fly={{ y: 50, duration: 500 }}>
					<strong>Team Civitas</strong> är en kreativ gemenskap för vänner som gillar att bygga, spela och skapa tillsammans. Teamet grundades av DanteMC (DanteMinecraft) den 10 oktober 2020 och har sedan dess vuxit till en grupp med flera personer från hela Sverige. Resan började med Minecraft-servern Civitascraft och har därefter utvecklats till att omfatta ett brett spektrum av spel, modpacks och projekt.<br><br>Idag har vi en stark närvaro inom Minecraft, där vi främst utforskar olika modpacks, skapar egna äventyr och arrangerar experimentella events samt återkommande servrar. Team Civitas är ett delvis offentligt community, men inkluderar ett mindre och privat team där varje person bidrar till att forma vår gemensamma historia – fylld av engagemang, kreativitet och minnesvärda ögonblick som vi bevarar genom bilder, projekt och minnen.
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
			<a class="animate" href="https://wiki.teamcivitas.net/index.php/Dante_(Medlem)" target="_blank" use:inView
			><TitledCard
				src="https://cdn.discordapp.com/avatars/345569186115878912/b14f8af3bea18c343972fbf5f54ee367.png?size=512"
				title="DanteMC"
				char_img={true}
				useHover={true}
			/></a>
			
		</div>
	</div>
	<div>
		<h3 class="subheading subheading-center">CIVITAS CORE-TEAMET</h3>
		<div use:inView onenterViewport={handleInView}>
			{#if showDescription}
				<p class="description" in:fly={{ y: 50, duration: 500 }}>
					<strong>Civitas Core</strong> är ett litet kärnteam av de medlemmar som har bidragit allra mest till Team Civitas genom långvarig support, engagemang och hjälp i olika projekt. Rollen ger inga särskilda privilegier, utan är en symbolisk utmärkelse som tack för deras insatser. Medlemmarna i Civitas Core har även varit delaktiga i utvecklingen av modpacks och andra kreativa projekt inom teamet.
				</p>
			{/if}
		</div>
		<div class="landing-page-cards">
			<div class="animate" use:inView>
			<a class="animate" href="https://wiki.teamcivitas.net/index.php/Revilo_(Medlem)" target="_blank" use:inView
				><TitledCard
					src="https://cdn.discordapp.com/avatars/565162541748322334/553b8be435af38621e2dc23fa179e76b.png?size=512"
					title="Revilo0509"
					char_img={true}
					useHover={true}
				/></a>
			</div>
			<div class="animate" use:inView>
			<a class="animate" href="https://wiki.teamcivitas.net/index.php/Lulle2345_(Medlem)" target="_blank" use:inView
				><TitledCard
					src="https://cdn.discordapp.com/avatars/516016703100944438/b41fd9914cb86108ba01b90de281e3f3.png?size=512"
					title="Lulle2345"
					char_img={true}
					useHover={true}
				/></a>
			</div>
			<div class="animate" use:inView>
			<a class="animate" href="https://wiki.teamcivitas.net/index.php/Zcloak_(Medlem)" target="_blank" use:inView
				><TitledCard
					src="https://cdn.discordapp.com/avatars/660178602150854830/ac2904465254d0264d23bbd9fc167e56.png?size=512"
					title="Zcloak"
					char_img={true}
					useHover={true}
				/></a>
			</div>
		</div>
	</div>
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
