<script>
	let { children } = $props();
</script>

<div class="horizontalScroll">
	{@render children()}
</div>

<style>
	.horizontalScroll {
		display: flex;
		overflow-x: auto;
		padding: 1.5rem;
		margin-left: -1.5rem;
		gap: 3rem;
	}

</style>
