<script>
	import { onMount } from 'svelte';

	let { children, name } = $props();
	let active = $state(false);

	function toggleMenu() {
		active = !active;
	}
</script>

<div>
	<div class="html-dropdown" role="menu" tabindex="0" onmouseleave={() => (active = false)}>
		<button type="button" aria-label="mega-menu" onclick={toggleMenu}>
			{name}<i class="fa fa-caret-down" style="margin-left: 7.5px;"></i>
		</button>

		{#if active}
			<div class="dropdown-content">{@render children()}</div>
		{/if}
	</div>
</div>

<style>
	.html-dropdown {
		display: inline-block;
		position: relative;
	}

	.dropdown-content {
		position: absolute;
		background: var(--backgound-secondary-color);
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
