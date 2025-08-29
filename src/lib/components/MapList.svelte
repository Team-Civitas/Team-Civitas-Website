<script>
	import { onMount } from 'svelte';
	let { map_img, map_heading, map_description, map_link, useHover = false } = $props();
</script>

<div class="map-list {useHover ? 'hover-enabled' : ''}">
		<a href="{map_link}" target="_blank">
			<div class="map-list-content">
				<img loading="lazy" src={map_img} alt="Map logotype" />
				<div class="map-info">
					<h1 class="heading">{map_heading}</h1>
					<p>{map_description}</p>
				</div>
			</div>
		</a>
	</div>

<style>
	.map-list img {
		width: 300px;
		height: auto;
		margin-right: 1rem;
	}

	.map-list {
		background-color: var(--background-secondary-color);
		padding: 0.5rem;
		border-radius: var(--border-radius);

		transition: transform 0.3s ease;
		margin: 3rem;
	}

	.map-list-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.map-list a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		p {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 480px) {
	}
</style>
