<script lang="ts">
	let { children } = $props();
</script>

<div class="box">
	{@render children()}
</div>

<style>
	.box {
		background-color: var(--card-bg);
		border-radius: var(--border-radius);
		width: 300px;
	}
</style>
