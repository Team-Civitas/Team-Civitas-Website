<script>
	import Header from '$lib/components/Header.svelte';
	import SocialButton from '$lib/components/SocialButton.svelte';
	import {
		active_project,
		logotype,
		history,
		socials,
		twitch_logo,
		youtube_logo,
		curseforge_logo
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

<div class="gradient-background">
	<div class="container">
		<div class="header-socials">
			<img class="logotype-socials" src={logotype} alt="Logotype" />
			<p>
				På den här sidan hittar du länkar till våra officiella konton och kan enkelt hålla dig
				uppdaterad om våra projekt, aktiviteter och nyheter. Följ oss gärna för att ta del av
				gemenskapen och se vad som händer inom Team Civitas!
			</p>
		</div>
		<h1 class="heading heading-center" style="font-size: 1.75rem;">
			TEAM CIVITAS-KONTON:
		</h1>

		<SocialButton
			src={youtube_logo}
			alt="YouTube"
			social_title="YouTube"
			social_href="https://www.youtube.com/@TeamCivitas"
			useHover={true}
		/>
		<SocialButton
			src={curseforge_logo}
			alt="CurseForge"
			social_title="CurseForge"
			social_href="https://www.curseforge.com/members/teamcivitas/projects"
			useHover={true}
		/>

		<h2 class="heading heading-center" style="font-size: 1.75rem;">
			TEAMETS SOCIALA MEDIER:
		</h2>

		<SocialButton
			src={twitch_logo}
			alt="Twitch"
			social_title="DanteMC"
			social_href="https://www.twitch.tv/danteminceraft"
			useHover={true}
		/>
		<SocialButton
			src={twitch_logo}
			alt="Twitch"
			social_title="Lulle2345"
			social_href="https://www.twitch.tv/lulle2345"
			useHover={true}
		/>
		<SocialButton
			src={twitch_logo}
			alt="Twitch"
			social_title="Revilo0509"
			social_href="https://www.twitch.tv/revilo0509"
			useHover={true}
		/>
	</div>
</div>

<style>
	.gradient-background {
		background: linear-gradient(180deg, #00273a 19.27%, var(--background-color) 100%);
	}

	.header-socials {
		margin: 1.5rem 0;
		padding: 1rem;

		display: flex;
		flex-direction: row;

		justify-content: center;
		align-items: center;

		background-color: #00000075;
		border-radius: var(--border-radius);
	}

	.logotype-socials {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
		display: block;
	}

	/*Tablet*/
	@media (max-width: 768px) {
	}

	/*Phone*/
	@media (max-width: 480px) {
	}
</style>
