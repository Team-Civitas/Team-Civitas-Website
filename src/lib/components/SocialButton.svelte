<script>
	import { onMount } from 'svelte';

	let { src, alt, social_title, social_href, useHover = false } = $props();

	onMount(() => {
		if (src) {
			let altParts = src.split('/');
			alt = altParts[altParts.length - 2];
		}
	});
</script>

<a href="{social_href}" class="social-button {useHover ? 'hover-enabled' : ''}" target="_blank" >
	{#if src}
		<img loading="lazy" {src} {alt} class="social-button-img" />
		<div class="social-button-title">{social_title}</div>
	{/if}
</a>

<style>
	.social-button {
		display: flex;
		flex-direction: row;
		align-items: center;

		position: relative;

		background-color: #00000075;
		border-radius: var(--border-radius);

		width: 350px;

		margin: 1rem auto;
		transition: transform 0.3s ease;
	}

	.social-button-img {
		padding: 0.5rem;
		width: 50px;
		height: auto;
		margin-right: 0.5rem;
	}

	.social-button-title {
		text-align: center;
		position: absolute;
		left: 0;
		right: 0;

		text-decoration: none;
		color: #fff;
	}
	</style>
