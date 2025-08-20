<script lang="ts">
	interface Iitem {
		title: string;
		body: string;
	}

	const { items }: { items: Iitem[] } = $props();
</script>

<div class="timeline">
	{#each items as item, i}
		<div class="timeline-card {i % 2 === 0 ? 'left' : 'right'}">
			<h2>{item.title}</h2>
			<p>{item.body}</p>
		</div>
	{/each}
</div>

<style>
	.timeline {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.timeline::before {
		position: absolute;
		content: '';
		background-color: var(--background-secondary-color);
		width: 8px;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.timeline-card {
		background-color: var(--background-secondary-color);
		padding: 1rem;
		margin: 1rem;
		border-radius: var(--border-radius);
		max-width: 90%;
		overflow-wrap: anywhere;
	}

	.timeline-card.left {
		grid-column: 1;
		justify-self: end;
		margin-top: 200px;
	}

	.timeline-card.right {
		grid-column: 2;
		justify-self: start;
		margin-bottom: 200px;
	}
</style>
