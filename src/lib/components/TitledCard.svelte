<script>
	import { onMount } from 'svelte';
	import Box from './Box.svelte';

	let { src, title, useHover = false, char_img = false } = $props();
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
			<img loading="lazy" {src} {alt} class="{char_img ? 'char_img' : ''}"/>
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

		width: 300px;
		position: relative;

		transition: transform 0.3s ease;
	}

	.hover-enabled:hover {
		transform: scale(1.05);
		transition: transform 0.3s cubic-bezier(.4, 2, .6, 1);
		box-shadow: 0 0 6px 8px #00000027;
		position: relative;
		z-index: 10;
	}

	.titled-card img {
		width: 100%;
		border-radius: var(--border-radius);
	}

	.char_img {
		width: auto !important;
		height: 300px;
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

		font-size: 1.5rem;
		text-wrap: nowrap;
    }

	@media (max-width: 768px) {
		.titled-card {
			width: 500px;
			height: auto;
		}
		
		.char_img {
		width: auto !important;
		height: 500px !important;
		}

		.titled-container h1 {
			font-size: 2rem;
		}
	}

	@media (max-width: 480px) {
		.titled-card {
			width: 275px;
			height: auto;
		}

		.char_img {
		width: auto !important;
		height: 275px !important;
		}
	}

</style>
