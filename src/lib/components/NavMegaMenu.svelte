<script>
	import { toDecode } from '$lib/stringFuncs';
	import HtmlDropdown from './HtmlDropdown.svelte';
	import NavLink from './NavLink.svelte';

	let { children, name, hrefs } = $props();
</script>

<div class="NavMegaMenu">
	<HtmlDropdown {name}>
		<ul class="content">
			{#each hrefs as href}
				<li><NavLink {href}/></li>
			{/each}
		</ul>
	</HtmlDropdown>
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
		border: 3px solid #000000;
		border-radius: var(--border-radius);
		backdrop-filter: blur(5px);
	}

	.content {
		list-style: none;
	}

	.content li {
		margin: 0.5rem 0;
	}
	
</style>
