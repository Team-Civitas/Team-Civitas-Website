<script>
	let { children, padding="0px", color = 'var(--background-secondary-color)' } = $props();
</script>

<div class="box" style="background-color: {color}; padding: {padding};">
	{@render children?.()}
</div>

<style>
	.box {
		border-radius: var(--border-radius);
	}
</style>
