<script lang="ts">
	import TimelineCard from './TimelineCard.svelte';

	interface Iitem {
		title: string;
		body: string;
	}

	const { items }: { items: Iitem[] } = $props();
</script>

<div class="timeline">
	{#each items as item, i}
		<div class="even-or-odd">
			<TimelineCard title={item.title} body={item.body} zigzag={i % 2 === 0} />
		</div>
	{/each}
</div>

<style>

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.even-or-odd {
		display: flex;
	}

	.even-or-odd.odd {
		justify-content: flex-start;
	}

	.even-or-odd.even {
		justify-content: flex-end;
	}
</style>
