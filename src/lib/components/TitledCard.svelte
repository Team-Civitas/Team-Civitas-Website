<script>
	import { onMount } from 'svelte';
	import Box from './Box.svelte';

	let { src, title, children } = $props();
	// svelte-ignore non_reactive_update
	let alt = '';

	onMount(() => {
		if (src) {
			let altParts = src.split('/');
			alt = altParts[altParts.length - 2];
		}
	});
</script>

<div class="member-container">
	<div class="member-card">
		{#if src}
			<img {src} {alt} />
		{/if}
		<span>
			{#if title}
				<h1>{title}</h1>
			{/if}
			{@render children?.()}
		</span>
	</div>
</div>

<style>
	.member-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.member-card {
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--background-secondary-color);
		padding: 1rem;
		border-radius: var(--border-radius);

		width: 500px;
	}

	.member-card img {
		width: auto;
		height: 500px;
		border-radius: var(--border-radius);
	}

    span {

		position: absolute;
		transform: translateY(500%);

        width: 100%;
        text-align: center;
        color: var(--primary-color);

		text-shadow: #000000 0 1px 15px;
    }



</style>
