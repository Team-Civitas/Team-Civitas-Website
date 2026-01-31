<script>
	import { onMount } from 'svelte';

	let { children, name } = $props();
	let active = $state(false);
	let timeout;

	function toggleMenu() {
		clearTimeout(timeout);
		active = !active;
	}

	function handleMouseLeave() {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			active = false;
		}, 300);
	}

	function handleMouseEnter() {
		clearTimeout(timeout);
	}
</script>

<div>
	<div
		class="html-dropdown"
		role="menu"
		tabindex="0"
		onmouseleave={handleMouseLeave}
		onmouseenter={handleMouseEnter}
	>
		<button type="button" aria-label="mega-menu" onclick={toggleMenu} class="underlined">
			{name}<i class="fa fa-caret-down" style="margin-left: 7.5px;"></i>
		</button>
		<div class="dropdown-content {active ? 'active' : ''}">{@render children()}</div>
	</div>
</div>

<style>
	.html-dropdown {
		display: inline-block;
		position: relative;
	}

	.dropdown-content {
		opacity: 0;
		pointer-events: none;
		position: absolute;
		background: var(--backgound-secondary-color);
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
	}

	.active {
		opacity: 1;
		pointer-events: auto;
	}
</style>
