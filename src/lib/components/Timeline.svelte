<script lang="ts">
	interface Iitem {
		title: string;
		body: string;
	}

	const { items }: { items: Iitem[] } = $props();
</script>

<div class="timeline">
	{#each items as item, i}
		<div class="timeline-row {i % 2 === 0 ? 'left' : 'right'}">
			<div class="timeline-dot"></div>
			<div class="timeline-card">
				<h2>{item.title}</h2>
				<p>{item.body}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.timeline {
		position: relative;
		margin: 2rem auto;
		padding: 2rem 0;
		width: min(90%, 1000px);
	}

	/* vertical line */
	.timeline::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 100%;
		background: var(--background-secondary-color);
		border-radius: 2px;
	}

	.timeline-row {
		position: relative;
		width: 50%;
		display: flex;
		margin-bottom: 3rem;
	}

	.timeline-row.left {
		justify-content: flex-end;
		padding-right: 2rem;
		text-align: right;
	}

	.timeline-row.right {
		margin-left: 50%;
		padding-left: 2rem;
		text-align: left;
	}

	.timeline-dot {
		position: absolute;
		top: 0.75rem;
		left: 50%;
		transform: translateX(-50%);
		width: 1.25rem;
		height: 1.25rem;
		background: var(--primary-color);
		border: 3px solid var(--background-color);
		border-radius: 50%;
		z-index: 2;
		transition: transform 0.3s ease;
	}

	.timeline-row:hover .timeline-dot {
		transform: translateX(-50%) scale(1.2);
	}

	.timeline-card {
		max-width: 400px;
		padding: 1.25rem;
		background: var(--background-secondary-color);
		color: var(--primary-color);
		border-radius: 1rem;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
		opacity: 0;
		transform: translateY(20px);
		animation: fadeInUp 0.6s forwards;
	}

	.timeline-card h2 {
		margin-bottom: 0.5rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.timeline-card p {
		font-size: 1rem;
		line-height: 1.5;
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* mobile responsive */
	@media (max-width: 768px) {
		.timeline::before {
			left: 8px;
		}

		.timeline-row,
		.timeline-row.left,
		.timeline-row.right {
			width: 100%;
			margin-left: 0;
			padding: 0 0 0 2rem;
			text-align: left;
		}

		.timeline-dot {
			left: 0;
			transform: none;
		}
	}
</style>
