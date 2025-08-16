<script>
	import Header from '$lib/components/Header.svelte';
	import TitledCard from '$lib/components/TitledCard.svelte';
	import { logotype } from '$lib/IconManager';
	import { inView } from '$lib/inView.js';
</script>

<Header
	title="OM OSS"
	bannersrc="../../lib/assets/OriginalModpacks/Civitas Spellbound/spellbound_banner.png"
/>

<div class="container">
	<h1 class="heading heading-left">HUR BÖRJADE ALLT?</h1>
	<p class="description">
		<strong>Team Civitas</strong> grundades av DanteMC (DanteMinecraft) den 10 oktober år 2020 och har
		sedan dess vuxit till en större gemenskap med personer från hela Sverige. Vår resa började med att
		vi spelade på en Minecraft-server vid namnet "Civitascraft" och har sedan dess utvecklats till att
		omfatta en mängd olika spel och projekt. Idag har vi en stark närvaro inom Minecraft, där vi främst
		spelar olika modpacks och skapar egna äventyr. Vårt team är inte bara en samling spelare, utan en
		kreativ gemenskap där vi delar idéer, bygger tillsammans och skapar minnen som varar livet ut.
	</p>
</div>

<div>
	<h2 class="heading heading-center">TEAMET BAKOM CIVITAS</h2>
	<div>
		<h3 class="subheading subheading-center">GRUNDARE</h3>
		<div class="animate" use:inView>
			<TitledCard
				src="https://starlightskins.lunareclipse.studio/render/ultimate/DanteMinecraft/full"
				title="DanteMC (DanteMinecraft)"
			/>
		</div>
	</div>
	<div>
		<h4 class="subheading subheading-center">CIVITAS CORE</h4>
		<div class="civitas-core">
			<div class="animate" use:inView>
				<TitledCard
					src="https://starlightskins.lunareclipse.studio/render/ultimate/Elf_Oliver/full"
					title="Elf_Oliver"
					useHover={false}
				/>
			</div>
			<div class="animate" use:inView>
				<TitledCard
					src="https://starlightskins.lunareclipse.studio/render/ultimate/Lulle2345/full"
					title="Lulle2345"
				/>
			</div>
			<div class="animate" use:inView>
				<TitledCard
					src="https://starlightskins.lunareclipse.studio/render/ultimate/Zcloak/full"
					title="Zcloak"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		padding: 70px;
	}

	.subheading {
		padding: 20px;
	}

	.civitas-core {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}
</style>
