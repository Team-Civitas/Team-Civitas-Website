<script>
	import { onMount } from 'svelte';
	import Box from './Box.svelte';

	let { src, title, useHover = false } = $props();
	// svelte-ignore non_reactive_update
	let alt = '';

	onMount(() => {
		if (src) {
			let altParts = src.split('/');
			alt = altParts[altParts.length - 2];
		}
	});
</script>

<div class="titled-container">
	<div class="titled-card {useHover ? 'hover-enabled' : ''}">
		{#if src}
			<img loading="lazy" {src} {alt} />
		{/if}
		{#if title}
			<div class="title-container">
				<h1>{title}</h1>
			</div>
		{/if}
	</div>
</div>

<style>

	.titled-container, .titled-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.titled-card {
		margin: 1rem 0;

		background-color: var(--background-secondary-color);
		padding: 1rem;
		border-radius: var(--border-radius);

		width: 500px;
		position: relative;

		transition: transform 0.3s ease;
	}

	.hover-enabled:hover {
		transform: scale(1.05);
		transition: transform 0.3s ease;
		box-shadow: 0 0 6px 8px #00000027;
	}

	.titled-card img {
		width: auto;
		height: 500px;
		border-radius: var(--border-radius);
	}

	.title-container {
        display: flex;
		position: absolute;
		bottom: 0;
        background-color: #00000080;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-top: white;
		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
    }

    .title-container h1 {
        padding: 1rem;
        margin-bottom: 2rem;
		margin-top: 1rem;
        color: var(--primary-color);
    }
</style>
