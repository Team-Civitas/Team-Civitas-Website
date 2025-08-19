<script>
	const { title, body, zigzag } = $props();
</script>

<div class="timelineItem {zigzag ? 'odd' : 'even'}">
	<h2>{title}</h2>
	<p>{body}</p>
</div>


<style>
 	.timelineItem {
 		width: 500px;
 		padding: 1rem;
 		border-radius: 0.5rem;
 		background-color: var(--background-secondary-color);
 		color: var(--primary-color);
	}

	.even {
		background-color: red;
	}
</style>
