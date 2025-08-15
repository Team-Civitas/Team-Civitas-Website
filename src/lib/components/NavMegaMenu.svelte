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
	}

	.NavMegaMenu :global(.dropdown-content) {
		padding: 1rem;
		margin-top: 0.5rem;
		border-radius: var(--border-radius);
		transition: color 0.5s ease;
	}
</style>
