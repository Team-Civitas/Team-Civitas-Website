<script>
	let { children, color = 'var(--backgound-secondary-color)' } = $props();
</script>

<div class="box" style="background-color: {color};">
	{@render children()}
</div>

<style>
	.box {
		border-radius: var(--border-radius);
	}
</style>
