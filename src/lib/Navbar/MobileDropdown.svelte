<script lang="ts">
	import NavLinks from './NavLinks.svelte';
</script>

<div class="dropdown">
	<NavLinks />
</div>

<style>
	.dropdown {
		position: absolute;
		top: 70px;
		right: 10px;

		background-color: var(--card-bg);
		border: 3px solid var(--card-bg-hover);
		border-radius: var(--border-radius);
		backdrop-filter: blur(5px);

		padding: 1rem;
		min-width: 200px;

		flex-direction: column;
	}

	.dropdown :global(ul) {
		list-style: none;
	}

	.dropdown :global(ul li) {
		font-size: 20px;
		padding: 0.5rem 1rem;
		color: var(--white);
	}

	.dropdown :global(ul li a:hover) {
		color: var(--highlight-color);
	}
</style>
