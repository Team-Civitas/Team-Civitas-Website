<script>
	let { children, color = 'var(--backgound-secondary-color)' } = $props();
</script>

<div class="card" style="background-color: {color};">
	{@render children()}
</div>

<style>
	.card {
		border-radius: var(--border-radius);
	}
</style>
