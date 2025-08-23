<script lang="ts">
	interface TimelineItem {
		title: string;
		paragraphs: string;
		date: string;
	}
	const { items }: { items: TimelineItem[] } = $props();
</script>

<div class="timeline">
	{#each items as item, i}
		{#if i % 2 == 0}
			<div class="component">
				<div class="date right">{item.date}</div>
			</div>
			<div class="centerLine">
				<div class="linePoint"></div>
			</div>
			<div class="component box">
				<h5 class="title heading">{item.title}</h5>
				{#each item.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		{:else}
			<div class="component box">
				<h5 class="title heading">{item.title}</h5>
				{#each item.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
			<div class="centerLine" class:dissaper={i == items.length-1}>
				<div class="linePoint"></div>
			</div>
			<div class="component">
				<div class="date">{item.date}</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.timeline {
		margin: 0 auto;
		max-width: 100%;
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr 4px 1fr;
	}

	.component {
		margin: 0 1rem 1rem 1rem;
	}

	.right {
		text-align: right;
	}

	.centerLine {
		position: relative;
		background: var(--background-secondary-color);
	}

	.dissaper {
		background: var(--background-color);
	}

	.linePoint {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 16px;
		height: 16px;
		background: var(--background-secondary-color);
		border-radius: 50%;
	}

	.box {
		border-radius: var(--border-radius);
		background-color: var(--background-secondary-color);
		padding: 1rem;
	}
</style>
