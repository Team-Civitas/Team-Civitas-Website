<script>
	import HtmlDropdown from './HtmlDropdown.svelte';

	let { children, name } = $props();
</script>

<div class="NavMegaMenu">
	<HtmlDropdown {name}>{@render children()}</HtmlDropdown>
</div>

<style>
	.NavMegaMenu :global(.html-dropdown > button) {
		background: none;
		border: none;
		padding: 2px;
		margin: 0 10px;
		color: inherit;
		font: inherit;
		transition: color 0.5s ease;
	}

	.NavMegaMenu :global(.html-dropdown > button:hover) {
		color: var(--highlight-color);
		cursor: pointer;
	}

	.NavMegaMenu :global(.dropdown-content) {
		padding: 1rem;
		margin-top: 0.5rem;
		border-radius: var(--border-radius);
		transition: color 0.5s ease;

		background-color: #00000050;
		border: 3px solid #272727;
		border-radius: 50vw;
		backdrop-filter: blur(5px);
	}
</style>
